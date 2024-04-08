import { useState } from "react";
import styles from "./login.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/auth.slice";
import axios from "axios";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingfrom = location.state?.from?.pathname || "/";

  const handleLogin = async () => {
    const payload = {
      userEmail: email,
      password,
    };
    return axios({
      method: "post",
      baseURL: "http://localhost:8080/api/auth/login",
      data: payload,
    })
      .then((r) => {
        console.log("logauth", r.data);

        dispatch(login(r.data));
        localStorage.setItem("token", r.data.token);
        navigate(comingfrom, { replace: true });
        console.log("Again Login success");
      })
      .catch((e) => console.log("Login failed", e));
  };

  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="Enter your name" />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className={styles.btn} onClick={handleLogin}>
          Submit
        </button>
      </div>
    </div>
  );
};
