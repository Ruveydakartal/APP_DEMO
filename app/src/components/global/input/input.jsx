import React from "react";
import style from "./input.module.css";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div>
      <input
        className={style.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
