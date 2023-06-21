import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// component
import NavbarMain from "../components/NavbarMain";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

//helper
import { menuList, sosList } from "../helpers/constans";
import { textOne } from "../helpers/constans";
import { contact } from "../helpers/constans";

export default function Cars() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

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

  console.log(data);

  return (
    <>
      <NavbarMain menu={menuList} logo="Binar" />
      <Showcase description={textOne} />
      <SearchBar />

      <input onChange={handleChange} />
      <button onClick={getData}> Cari </button>
      {data.map((item) => (
        <div>
          <img src={item.image} />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
        </div>
      ))}

      <Footer contactUs={contact} menu={menuList} social={sosList} />
    </>
  );
}
