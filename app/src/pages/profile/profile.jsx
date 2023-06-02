import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import PrimButton from "../../components/global/button/primButton";
import Title from "../../components/global/titel/title";
import Header from "../../components/home/header/header";
import { useAuthContext } from "../../contexts/AuthContainer";
import useMutation from "../../hooks/useMutation";
import style from "./profile.module.css";
import ProfileForm from "./profileForm";

const Profile = ({ onUpdate, onSuccess, id }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { mutate } = useMutation();

  const handleSubmit = (data) => { 
    mutate(`${process.env.REACT_APP_API_URL}/profile/${user._id}`, {
      method: "PATCH",
      data,
      onSuccess: () => {
        onUpdate();
        Navigate(`/home`);
      },
    });
  };

  const handleClick = () => {
    mutate(`${process.env.REACT_APP_API_URL}/profile/${user._id}`, {
      method: "DELETE",
      onSuccess: () => {
        onSuccess();
        Navigate(`/login`);
      },
    });
  };

  return (
    <div>
    
      <div className={style.container}>
        <Title>Mijn profiel</Title>
        <ProfileForm onSubmit={handleSubmit} initialData={user} />

        <Title> Verwijder Account</Title>
        <PrimButton onClick={handleClick}>Verwijder</PrimButton>
      </div>
    </div>
  );
};

export default Profile;
