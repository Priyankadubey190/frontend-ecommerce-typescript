import { useState } from "react";
import styles from "./signup.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSignup = () => {
    const payload = {
      username,
      userEmail: email,
      password,
    };

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        Navigate("/login");
        console.log(res);
      })
      .catch((err) => console.log("signErr", err));
  };

  return (
    <div className={styles.signcontainer}>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="Are you User or Admin"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <div className={styles.btn_container}>
          <button className={styles.signbtn} onClick={handleSignup}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
