import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./checkout.module.scss";
import { useNavigate } from "react-router-dom";

interface CartItem {
  products: {
    price: number;
  };
  quantity: number;
}

export default function Checkout() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [tprice, setTprice] = useState(0);

  const Navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSetPrice = () => {
    axios
      .get(`http://localhost:8080/api/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Cartresponse", response);

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

  const handleCheckout = () => {
    if (
      !name ||
      !city ||
      !district ||
      !state ||
      !pincode ||
      !contact ||
      !address
    ) {
      alert("Please Fill All Details");
    } else {
      axios
        .post(`http://localhost:8080/api/checkout`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("checkout response", response.data);
          alert("Thanks for shopping");
        })
        .catch((error) => {
          console.log("Error during checkout", error);
        });
    }
  };

  const handleDiscount = () => {
    const discount = tprice - (tprice * 20) / 100;
    setTprice(discount);
  };

  useEffect(() => {
    handleSetPrice();
  }, []);

  return (
    <div className={style.container}>
      <h1>Checkout</h1>
      <div className={style.childcon}>
        <div className={style.left}>
          <div>
            <label htmlFor="">Name</label>
            <br />
            <label htmlFor="">City</label>
            <br />
            <label htmlFor="">District</label>
            <br />
            <label htmlFor="">State</label>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <label htmlFor="">Contact Number</label>
            <br />
            <label htmlFor="">Address</label>
            <br />
            <div style={{ display: "flex" }}></div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              <input type="radio" name="pay" />
              Razorpay
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              <input type="radio" name="pay" />
              Cash on Delivery
            </div>
            <br />
            <br />
            <br />
            <button className={style.btn} onClick={() => handleCheckout()}>
              Submit
            </button>
            <br />
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City Name"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter District Name"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter State Name"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Your Pincode"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter Contact Number"
              className={style.myinput}
            />
            <br />
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Your Address"
              className={style.myinput}
            />
            <br />
          </div>
        </div>
        <div>
          <div>
            <button className={style.btn} onClick={() => Navigate("/")}>
              Continue Shopping
            </button>
            <button className={style.btn} onClick={handleDiscount}>
              Use Coupon
            </button>
          </div>
          <b>Total Price: {tprice}</b>
        </div>
      </div>
    </div>
  );
}
