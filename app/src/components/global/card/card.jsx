import React from "react";
import style from "./card.module.css";

const Card = ({ propertyData }) => {
  return (
    <div className={style.container}>
      <article className={style.card}>
        <img src={propertyData.cover} alt="" className={style.img} />
        <div className={style.text}>
          <div className={style.card_price}>
            <h1 className={style.title}>{propertyData.type}</h1>
            <h3 className={style.price}>€{propertyData.price}</h3>
          </div>
          <p className={style.p}>Te {propertyData.city}</p>
          <p className={style.p}>{propertyData.livingArea} m2</p>
          <p className={style.p}>{propertyData.bedrooms} bedrooms</p>
        </div>
      </article>
    </div>
  );
};

export default Card;
