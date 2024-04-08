import { RootState } from "@reduxjs/toolkit/query";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const ReqAuth: React.FC<Props> = ({ children }) => {
  const userToken = useSelector((state: RootState) => state.auth.user.token);
  const location = useLocation();

  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace={true}
      />
    );
  }

  return <>{children}</>;
};

export default ReqAuth;
