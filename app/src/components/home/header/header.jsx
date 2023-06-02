import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../../consts/routes";
import SecButton from "../../global/button/secButton";
import { useAuthContext } from "../../../contexts/AuthContainer";
import useFetch from "../../../hooks/useFetch";

const Header = ({ onSubmit }) => {
  const { logout } = useAuthContext();

  return (
    <div className={style.container}>
      <h1>
        <a href="/" className={style.logo}>
          IMMO
        </a>
      </h1>
      <div className={style.nav}>
        <Link className={style.nav__link} to={ROUTES.forSale}>
          Te koop
        </Link>
        <Link className={style.nav__link} to={ROUTES.forRent}>
          Te huur
        </Link>
        <Link className={style.nav__link} to={ROUTES.offices}>
          Immo kantoren
        </Link>
        <Link className={style.nav__link} to={ROUTES.favorites}>
          Favorieten
        </Link>
      </div>
      <div className={style.header_buttons}>
        <Link to={ROUTES.profile}>
          {" "}
          <SecButton>Mijn Profiel</SecButton>
        </Link>
        <SecButton onClick={logout}>Log uit</SecButton>
      </div>
    </div>
  );
};

export default Header;
