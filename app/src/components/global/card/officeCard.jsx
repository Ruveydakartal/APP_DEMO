import React from "react";
import style from "./officeCard.module.css";

const OfficeCard = ({ officeData }) => {
  return (
    <div>
      <article className={style.card}>
        <img src={officeData.image} alt="" className={style.img} />
        <h1 className={style.title}> {officeData.name}</h1>
        <p className={style.text}> {officeData.tel}</p>
        <p className={style.text}> {officeData.adress}</p>
      </article>
    </div>
  );
};

export default OfficeCard;
