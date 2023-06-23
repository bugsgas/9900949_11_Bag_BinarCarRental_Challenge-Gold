import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// component
import NavbarMain from "../components/NavbarMain";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Details from "../components/Details";
import CarCard from "../components/CarCard";

//helper
import { menuList } from "../helpers/constans";
import { textOne } from "../helpers/constans";
import { contact } from "../helpers/constans";
import { useNavigate } from "react-router-dom";

export default function Cars() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const goSearch = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}`;

    axios
      .get(api)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <NavbarMain menu={menuList} logo="Binar" />
      <Showcase
        description={textOne}
        showButton={false}
        showText={true}
        showImg={true}
      />
      <SearchBar search={handleChange} clicked={getData} />
      <CarCard />

      {/* <input onChange={handleChange} />
      <button onClick={getData}> Cari </button>
      {data.map((item) => (
        <div>
          <img src={item.image} />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <button onClick={() => goSearch(item.id)}> ketik </button>
        </div>
      ))} */}

      <Footer contactUs={contact} menu={menuList} />
    </>
  );
}
