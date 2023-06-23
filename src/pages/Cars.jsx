import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// component
import NavbarMain from "../components/NavbarMain";
import Showcase from "../components/Showcase";
import Footer from "../components/Footer";
import FindCarComponent from "../FindCarComponent";

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
    const api = `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}`;
    axios
      .get(api)
      .then((res) => {
        setData(res.data.cars);
      })
      .catch((err) => console.log(err));
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
      <FindCarComponent />
      <Footer contactUs={contact} menu={menuList} />
    </>
  );
}
