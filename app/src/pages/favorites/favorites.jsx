import React from "react";
import Card from "../../components/global/card/card";
import Title from "../../components/global/titel/title";
import Header from "../../components/home/header/header";
import useFetch from "../../hooks/useFetch";

const Favorites = () => {

  // fetch for favorites page
  const { error, data: favorites } = useFetch("/favorites");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
  
      <Title>Favorites</Title>
      {/* mapping true favs */}
      {favorites?.map((favorite) => (
        <Card key={favorite._id} propertyData={favorite} />
      ))}
    </div>
  );
};

export default Favorites;
