import axios from "axios";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getClothData } from "../Redux/AppReducer/action";
import style from "./singlecloth.module.css";

interface Cloth {
  _id: string;
  image: string;
  color: string;
  review: string;
  price: number;
}

const SingleCloth: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const [currentCloth, setCurrentCloth] = useState<Cloth | null>(null);

  const token = localStorage.getItem("token");

  const handleaddtoCart = (id: string, data: string) => {
    axios
      .post(
        `https://gleaming-suspenders-bass.cyclic.app/cart/${id}`,
        {
          products: [
            {
              product_id: data,
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

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/cart/productdetails/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const cartProduct = response.data.cartProduct;
        if (cartProduct && cartProduct.items && cartProduct.items.length > 0) {
          setCurrentCloth(cartProduct.items[0].product);
        }
      })
      .catch((error) => {
        console.log("Error fetching product details:", error);
      });
  }, []);

  return (
    <div className={style.procontainer}>
      <h2>Welcome to Product's Detail</h2>
      <br />
      {currentCloth && (
        <div className={style.topcontainer}>
          <div className={style.imgcon}>
            <img src={currentCloth.image} alt="Cover Pic" />
          </div>
          <div className={style.leftcon}>
            <div className={style.leftchild}>
              <div className={style.icon}>
                <FaFacebookF className={style.iconsize} />
                <FaInstagramSquare className={style.iconsize} />
              </div>
              <div className={style.flex}>
                <div>
                  Color <span>{currentCloth.color}</span>
                </div>
                <div>
                  Review <span>{currentCloth.review}</span>
                </div>
              </div>
              <div className={style.flex}>
                <div>
                  Price <span>${currentCloth.price}</span>
                </div>
                <button
                  className={style.btn}
                  // onClick={() => handleaddtoCart(cartKey, currentCloth._id)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCloth;
