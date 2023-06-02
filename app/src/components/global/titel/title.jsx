import React from "react";
import style from "./title.module.css";

const Title = ({ children }) => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>{children}</h1>
    </div>
  );
};

export default Title;
