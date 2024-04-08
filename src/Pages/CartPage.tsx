import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import style from "./cart.module.css";

const CartPage: React.FC = () => {
  const Navigate = useNavigate();
  const [action, setAction] = useState<string>("");
  const [cartData, setCartData] = useState([]);
  const [tprice, setTprice] = useState<number>(0);
  const [quantity, setQuantity] = useState(false);
  const [cardDelete, setCardDelete] = useState(false);
  const token = localStorage.getItem("token");

  const handleGettoCart = () => {
    axios
      .get(`http://localhost:8080/api/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Cartresponse", response);

        setCartData(response.data.items);
        const totalPrice: number = response.data.items.reduce(
          (accumulator: number, currentItem: any) => {
            return (
              accumulator + currentItem.product.price * currentItem.quantity
            );
          },
          0
        );

        setTprice(totalPrice);
      })
      .catch((error) => {
        console.error("cart post error:", error);
      });
  };

  const handleCartQuantity = (id: string, action: string) => {
    axios
      .patch(
        `http://localhost:8080/api/cart/${id}`,
        {
          action: action,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        handleGettoCart();
      })
      .catch((error) => {
        console.error("cart update error:", error);
      });
  };

  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:8080/api/cart/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        handleGettoCart();
      })
      .catch((error) => {
        console.error("cart delete error:", error);
      });
  };

  useEffect(() => {
    handleGettoCart();
  }, [quantity, cardDelete]);

  return (
    <div className={style.container}>
      <div>
        {cartData &&
          cartData.length > 0 &&
          cartData.map((el: any, ind: number) => (
            <div
              className={style.flex}
              key={ind}
              onClick={() => Navigate(`/prodectdetails/${el.product._id}`)}
            >
              <div>
                <img src={el.product.image} alt="" className={style.imgclass} />
              </div>
              <div className={style.childcon}>
                <div>
                  <div>
                    Color <b>: {el.product.color}</b>
                  </div>
                  <br />
                  <div>
                    Review <b>: {el.product.review}</b>
                  </div>
                  <br />
                  <div>
                    Price <b>: ${el.product.price * el.quantity}</b>
                  </div>
                </div>
              </div>
              <div className={style.childcon}>
                <button
                  className={style.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAction("increase");
                    handleCartQuantity(el.product._id, "increase");
                  }}
                >
                  +
                </button>
                <div
                  style={{
                    fontSize: "25px",
                    backgroundColor: "white",
                    padding: "1px 10px",
                  }}
                >
                  {el.quantity}
                </div>
                <button
                  className={style.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("el.product.quantity", el.quantity);
                    if (+el.quantity > 1) {
                      setAction("decrease");

                      handleCartQuantity(el.product._id, "decrease");
                    }
                  }}
                >
                  -
                </button>
              </div>
              <div className={style.childcon}>
                <button
                  className={style.btn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(el.product._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <button className={style.btn} onClick={() => Navigate("/")}>
          Continue Shopping
        </button>
        <br />
        <br />
        <button className={style.btn} onClick={() => Navigate("/checkout")}>
          Proceed to checkout
        </button>
        <h3>Total Amount</h3>
        <b>{tprice}</b>
      </div>
    </div>
  );
};

export default CartPage;
