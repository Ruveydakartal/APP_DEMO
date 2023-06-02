import React from "react";
import Header from "../../components/home/header/header";
import style from "./offices.module.css";
import Title from "../../components/global/titel/title";
import useFetch from "../../hooks/useFetch";
import OfficeCard from "../../components/global/card/officeCard";

const Offices = () => {
  const { error, data: offices } = useFetch("/offices");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.container}>

      <Title>Kantoren</Title>
      <article className={style.card}>
        {offices?.map((office) => (
          <OfficeCard key={office._id} officeData={office} />
        ))}
      </article>
    </div>
  );
};

export default Offices;
