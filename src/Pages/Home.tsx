import React from "react";
import styles from "./home.module.scss";
import { ImageSlider } from "../Components/ImageSlider";

const images = [
  "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/topimg1.jpg",
  "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-2.jpg",
  "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/img-top-4.webp",
  "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-5.jpg",
];

const Home: React.FC = () => {
  return (
    <div className={styles.homecontainer}>
      <ImageSlider />

      <div className={styles.sach_cont}>
        <div className={styles.box3_backgroundimage}>
          <div className={styles.innerdiv}>
            <img
              className={styles.sach_2}
              src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/sach-img1.gif"
              alt="sach"
            />
            <div>
              <a className={styles.sach_3} href="">
                SHOES
              </a>
            </div>
          </div>

          <div className={styles.innerdiv}>
            <img
              className={styles.sach_2}
              src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/face-cover.jpg"
            />
            <div>
              <a className={styles.sach_3} href="">
                FACE COVERS
              </a>
            </div>
          </div>
          <div className={styles.innerdiv}>
            <img
              className={styles.sach_2}
              src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/atheli.jpg"
            />
            <div>
              {" "}
              <a className={styles.sach_3} href="">
                ATHLEISURE
              </a>
            </div>
          </div>
          <div className={styles.innerdiv}>
            <img
              className={styles.sach_2}
              src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/ACCESSORIES.jpg"
            />
            <div>
              {" "}
              <a className={styles.sach_3} href="">
                ACCESSORIES
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
