import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import styles from "./imageSlider.module.scss";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export const ImageSlider = () => {
  const images = [
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/topimg1.jpg",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-2.jpg",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/img-top-4.webp",
    "https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/src/images/top-img-5.jpg",
  ];

  return (
    <div>
      <Carousel>
        {images.map((item, index) => (
          <Carousel.Item interval={1000}>
            <img
              className={`d-block w-100 ${styles.image}`}
              src={item}
              alt={`Image ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>Trending Product slide</h3>
              <p>Image slider</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
