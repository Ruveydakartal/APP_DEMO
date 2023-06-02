import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ContactForm from "../../components/detail/contactForm";
import PrimButton from "../../components/global/button/primButton";
import Input from "../../components/global/input/input";
import Title from "../../components/global/titel/title";
import Header from "../../components/home/header/header";
import { useAuthContext } from "../../contexts/AuthContainer";
import useFetch from "../../hooks/useFetch";
import useMutation from "../../hooks/useMutation";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const { mutate } = useMutation();
  const { user } = useAuthContext();

  // params: id, userId for favorite
  const [data, setData] = useState({
    propertyId: id,
    userId: user._id,
  });

  // fetch for detail page
  const { isLoading, error, data: property } = useFetch(`/detail/${id}`);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Aan het laden</p>;
  }

  // data will be posted to favorites collection
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(`${process.env.REACT_APP_API_URL}/detail/${id}/favorite`, {
      method: "POST",
      data,
      onSuccess: () => {
        Navigate(`/favorites`);
      },
    });
  };

  return (
    <div> 
      <div className={style.container}>
        <Title>Detail</Title>
        <article className={style.images}>
          <img src={property.cover} alt="" className={style.cover_img} />
          <div className={style.little_img}>
            <img src="../images/2.jpg" alt="" className={style.img} />
            <img src="../images/3.jpg" alt="" className={style.img} />
            <img src="../images/4.jpg" alt="" className={style.img} />
          </div>
        </article>

        <article className={style.block}>
          <h1 className={style.title}>{property.type}</h1>
          <h3 className={style.p}>€ {property.price}</h3>
          <h3 className={style.p}>{property.adress} {property.zip}</h3>
          <p className={style.p}>{property.city}</p>
          <p className={style.p}>{property.livingArea} m2</p>
          <p className={style.p}>{property.bedrooms} slaapkamers</p>
        </article>

        <form onSubmit={handleSubmit}>
          <PrimButton type="submit">Voeg toe aan Favorieten</PrimButton>
        </form>

        <article className={style.block}>
          <h1 className={style.title}>Description</h1>
          <p className={style.p}>{property.description} </p>
        </article>

        <ContactForm />
      </div>
    </div>
  );
};

export default Detail;
