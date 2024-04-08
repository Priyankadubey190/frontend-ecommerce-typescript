import React from "react";
import style from "../Pages/womencloth.module.scss";

interface ClothCardType {
  id: string;
  img: string;
  price: number;
  review: number;
}

const ClothCard: React.FC<ClothCardType> = (props) => {
  const { id, img, price, review } = props;

  return (
    <div className={style.childcon}>
      <div className={style.flex}>
        <img src={img} alt="" className={style.proimg} />
      </div>
      <div className={style.detail}>
        <div>
          Price <span>{`$${price}`}</span>
        </div>
        <div>
          Review <span>{review}</span>
        </div>
      </div>
    </div>
  );
};

export default ClothCard;
