import React from "react";
import PrimButton from "../button/primButton";

import Input from "../input/input";

import style from "./search.module.css";

const Search = ({ onChange, value }) => {
  return (
    <form action="" className={style.container} onChange={onChange}>
      <Input
        type="text"
        placeholder="Voer een stad in"
        className={style.stad}
        name="city"
        value={value.city}
      />
      <select className={style.select} value={value.type} name="type">
        <option value="Huis">Huis</option>
        <option value="Appartement">Appartement</option>
        <option value="Studio">Studio</option>
      </select>
      <Input
        type="number"
        placeholder="prijs"
        value={value.price}
        name="price"
      />
      <PrimButton type="submit">Filter</PrimButton>
    </form>
  );
};

export default Search;
