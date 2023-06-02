import React from "react";
import style from "../button/secButton.module.css";

const SecButton = ({ onClick, children }) => {
  return (
    <div>
      <button className={style.btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default SecButton;
