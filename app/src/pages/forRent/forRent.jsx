import React, { useEffect, useState } from "react";
import Card from "../../components/global/card/card";
import Search from "../../components/global/search/search";
import Header from "../../components/home/header/header";
import style from "./forRent.module.css";
import useFetch from "../../hooks/useFetch";
import Title from "../../components/global/titel/title";
import { Link } from "react-router-dom";

const ForRent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormdata] = useState("");
  const { data: properties, error } = useFetch("/for-rent");

  useEffect(() => {
    if (error) {
      return; // Return early if there is an error
    }
    setFilteredData(properties || []); // Set the initial filtered data to properties or an empty array
  }, [error, properties]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();

    setFormdata(searchValue);

    if (searchValue !== "") {
      const newFilter = properties.filter((value) => {
        return (
          value.city.toLowerCase().includes(searchValue) &&
          value.type.toLowerCase().includes(searchValue) &&
          value.price.toString().includes(searchValue)
        );
      });
      setFilteredData(newFilter);
    } else {
      setFilteredData(properties || []); // Set filtered data to properties or an empty array when search value is empty
    }
  };

  return (
    <>
    
      <Search onChange={handleSearch} value={formData} />
      <main>
        <Title>Alle panden</Title>
        <div className={style.container}>
          {properties ? (
            filteredData.map((property) => (
              <Link
                to={`/detail/${property._id}`}
                className={style.link}
                key={property._id}
              >
                <Card propertyData={property} />
              </Link>
            ))
          ) : (
            <p>No results</p>
          )}
        </div>
      </main>
    </>
  );
};
export default ForRent;
