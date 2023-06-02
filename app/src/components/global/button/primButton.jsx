import React from "react";
import style from "../button/primButton.module.css";

const PrimButton = ({
  onClick,
  children,
  onSubmit,
  type,
  disabled = false,
}) => {
  return (
    <div>
      <button
        className={style.btn}
        onClick={onClick}
        onSubmit={onSubmit}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimButton;
