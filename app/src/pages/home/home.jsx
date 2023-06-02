import Card from "../../components/global/card/card";
import Search from "../../components/global/search/search";
import style from "./home.module.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Title from "../../components/global/titel/title";
import { useEffect, useState } from "react";

const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormdata] = useState("");

  // fetch properties
  const { data: properties, error } = useFetch("/home");

  useEffect(() => {
    if (error) {
      return; // Return early if there is an error
    }
    setFilteredData(properties || []); // Set the initial filtered data to properties or an empty array
  }, [error, properties]);


  // search function 
  const handleSearch = (e) => { 
    const searchValue = e.target.value.trim().toLowerCase();

    setFormdata(searchValue);

    if (searchValue !== "") { // if search value is not empty
      const newFilter = properties.filter((value) => {
        return (
          value.city.toLowerCase().includes(searchValue) ||
          value.type.toLowerCase().includes(searchValue) ||
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

export default Home;
