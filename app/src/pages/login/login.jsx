import React, { useState } from "react";
import PrimButton from "../../components/global/button/primButton";
import Input from "../../components/global/input/input";
import style from "./login.module.css";
import useMutation from "../../hooks/useMutation";
import Title from "../../components/global/titel/title";
import { useAuthContext } from "../../contexts/AuthContainer";

const Login = ({ onLogin }) => { 
  const { isLoading, error, mutate } = useMutation(); 

  const [data, setData] = useState({ 
    email: "",
    password: "",
  });

  const handleChange = (e) => { //data will be updated with the input values
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { //data will be send to the backend
    e.preventDefault();

    mutate(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      data,
      onSuccess: (data) => {
        onLogin(data);
      },
    });
  };
  console.log(onLogin);

  return (
    <div className={style.container}>
      <form className={style.formInputs} onSubmit={handleSubmit}>
        <Title>Meld je aan</Title>

        {error && <p>{error}</p>}
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

        <PrimButton>Login</PrimButton>
      </form>
    </div>
  );
};

export default Login;
