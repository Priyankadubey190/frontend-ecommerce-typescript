import styles from "./navbar.module.scss";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={styles.mynavbar}>
      <img
        src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/web-logo.png"
        alt=""
        className={styles.logo}
      />
      <ul
        className={mobile ? styles.nav_link_mobile : styles.mynav_link}
        onClick={() => setMobile(false)}
      >
        <Link to="/" className={styles.nav_link}>
          <li>HOME</li>
        </Link>
        <Link to="/women" className={styles.nav_link}>
          <li>WOMEN</li>
        </Link>
        <Link to="/man" className={styles.nav_link}>
          <li>MAN</li>
        </Link>
        <Link to="/login" className={styles.nav_link}>
          <li>LOGIN</li>
        </Link>
        <Link to="/signup" className={styles.nav_link}>
          <li>SIGN UP </li>
        </Link>
        <Link to="/cart" className={styles.nav_link}>
          <li>
            <FaShoppingCart className={styles.cart} />
          </li>
        </Link>
      </ul>
      <button
        className={styles.mobile_menu_icon}
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
};
