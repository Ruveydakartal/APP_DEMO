import React, { useState } from "react";
import Title from "../../components/global/titel/title";
import PrimButton from "../../components/global/button/primButton";
import Input from "../../components/global/input/input";
import style from "./registration.module.css";
import useMutation from "../../hooks/useMutation";

const Register = ({ onRegister }) => {
  const { isLoading, error, mutate } = useMutation();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onRegister(data);
      },
    });
  };
  console.log(onRegister);
  return (
    <div className={style.container}>
      <form className={style.formInputs} onSubmit={handleSubmit}>
        <Title>registreer je</Title>

        {error && <p>{error}</p>}
        <label className={style.formLabel} htmlFor="name">
          naam:
        </label>
        <Input
          className={style.formInput}
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
        />
        <label className={style.formLabel} htmlFor="firstname">
          Voornaam:
        </label>
        <Input
          className={style.formInput}
          name="firstname"
          type="text"
          value={data.firstname}
          onChange={handleChange}
        />
        <label className={style.formLabel} htmlFor="email">
          Email:
        </label>
        <Input
          className={style.formInput}
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <label className={style.formLabel} htmlFor="password">
          Password:
        </label>
        <Input
          className={style.formInput}
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <select name="role" onChange={handleChange} value={data.role} className={style.select}>
          <option value="">Kies een rol</option>
          <option value="user">Gebruiker</option>
          <option value="realtor">Makelaar</option>
        </select>

        <PrimButton>Login</PrimButton>
      </form>
    </div>
  );
};

export default Register;
