import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

import { WomenClothData } from "./WomenClothData";
import { Signup } from "../Components/Signup";
import { Login } from "../Components/Login";
import ReqAuth from "../Components/ReqAuth";
import CartPage from "./CartPage";
import Checkout from "./Checkout";
import Address from "./Address";
import SingleCloth from "./SingleCloth";

export default function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<WomenClothData />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/prodectdetails/:id"
        element={
          <ReqAuth>
            {" "}
            <SingleCloth />{" "}
          </ReqAuth>
        }
      />
      <Route
        path="/cart"
        element={
          <ReqAuth>
            {" "}
            <CartPage />{" "}
          </ReqAuth>
        }
      />

      <Route
        path="/checkout"
        element={
          <ReqAuth>
            {" "}
            <Checkout />{" "}
          </ReqAuth>
        }
      />
      <Route
        path="/address"
        element={
          <ReqAuth>
            {" "}
            <Address />{" "}
          </ReqAuth>
        }
      />
    </Routes>
  );
}
