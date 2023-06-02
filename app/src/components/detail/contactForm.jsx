import React, { useState } from "react";
import Input from "../global/input/input";
import PrimButton from "../global/button/primButton";
import style from "./contactForm.module.css";
import useMutation from "../../hooks/useMutation";
import { Navigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContainer";

const ContactForm = () => {
  const { id } = useParams();
  const { mutate } = useMutation();
  const { user } = useAuthContext();

  // params: id, email, phone, message, userId
  const [data, setData] = useState({
    email: "",
    phone: "",
    message: "",
    userId: user._id,
  });


 //data will be updated with the input values
  const handleChange = (e) => {  
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  //data will be send to the backend
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/detail/${id}/message`, {
      method: "POST",
      data,
      onSuccess: () => {
        Navigate(`/favorites`);
      },
    });
  };

  return (
    <div>
      <form action="" className={style.block} onSubmit={handleSubmit}>
        <h1 className={style.title}>Neem contact op</h1>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Telefoonnummer"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <textarea
          className={style.textarea}
          name="message"
          value={data.message}
          placeholder="Schrijf hier je bericht"
          onChange={handleChange}
        ></textarea>
        <PrimButton>Versturen</PrimButton>
      </form>
    </div>
  );
};

export default ContactForm;
