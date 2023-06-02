import React, { useState } from "react";
import PrimButton from "../../components/global/button/primButton";
import Input from "../../components/global/input/input";
import { useAuthContext } from "../../contexts/AuthContainer";

const ProfileForm = ({ onSubmit, isDisabled, label, initialData = {} }) => {
  const [data, setData] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="firstname"
        onChange={handleChange}
        value={data.firstname}
      />
      <Input
        type="email"
        name="email"
        onChange={handleChange}
        value={data.email}
      />
      <Input
        type="password"
        name="password"
        onChange={handleChange}
        value={data.password}
      />
      <PrimButton type="submit" disabled={isDisabled}>
        Wijzig
      </PrimButton>
    </form>
  );
};

export default ProfileForm;
