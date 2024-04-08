import React, { useEffect, useState } from "react";
import style from "./womencloth.module.scss";
import Filter from "../Components/Filter";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams, Link } from "react-router-dom";
import ClothCard from "../Components/ClothCard";
import axios from "axios";
import {
  productRequest,
  productSuccess,
  productFailure,
} from "../store/product.slice";
import { RootState } from "@reduxjs/toolkit/query";

const WomenClothData = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [totalPages, setTotalPages] = useState<number | null>();
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams({});
  const dispatch = useDispatch();
  const [queryParam, setQueryParam] = useState({});
  const user = useSelector((state: RootState) => state.auth.user);

  const token = localStorage.getItem("token");

  console.log("tokenee", token);

  const fetchProducts = () => {
    dispatch(productRequest());
    console.log("queryParam2", queryParam);
    axios
      .get(`http://localhost:8080/api/products/filter`, queryParam)
      .then((r) => {
        dispatch(productSuccess(r.data.products));
        setData(r.data.products);
        setTotalPages(r.data.totalPages);
      })
      .catch((e) => {
        dispatch(productFailure("Failed to fetch products"));
      });
  };

  const handleAddtoCart = (id: string) => {
    axios
      .post(
        `http://localhost:8080/api/cart/${id}`,
        {
          products: [
            {
              product: id,
              quantity: 1,
            },
          ],
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => {
        console.log("cartpostdt", r);
        alert("Item is added successfully");
      })
      .catch((er) => {
        console.log("carterr", er);
      });
  };

  console.log("user", user);

  useEffect(() => {
    const pageNo = searchParams.get("page") || "1";
    const colors = searchParams.getAll("color") || "1";

    setPage(parseInt(pageNo));

    setQueryParam({
      params: {
        page: pageNo,
        color: colors,
      },
    });
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    setSearchParams(params);
  }, [page, setSearchParams]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [queryParam]);

  return (
    <div>
      <div className={style.topimg}>
        <img
          src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/women-img1.jpg"
          alt=""
          height="400px"
          width="100%"
        />
      </div>
      <div style={{ display: "flex" }}>
        <div className={style.filter}>
          <Filter />
        </div>
        <div className={style.myclass}>
          {data &&
            data.length > 0 &&
            data.map((el, ind) => (
              <div className={style.childcon} key={el._id}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <ClothCard
                    id={el.id}
                    img={el.image}
                    price={el.price}
                    review={el.review}
                  />
                </Link>
                <button
                  className={style.btn}
                  onClick={() => handleAddtoCart(el._id)}
                >
                  ADD
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className={style.mybtn}>
        <button
          className={style.btn}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </button>
        <button
          className={style.btn}
          onClick={() => {
            if (totalPages) {
              if (page < totalPages) {
                setPage(page + 1);
              }
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { WomenClothData };
