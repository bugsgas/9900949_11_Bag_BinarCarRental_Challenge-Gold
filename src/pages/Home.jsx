import React from "react";

// component
import NavbarMain from "../components/NavbarMain";
import Showcase from "../components/Showcase";
import Faq from "../components/Faq";
import Benefit from "../components/Benefit";
import Testimonial from "../components/Testimonial";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

//helper
import { menuList } from "../helpers/constans";
import { FAQ } from "../helpers/constans";
import { benefitList } from "../helpers/constans";
import OurServices from "../components/OurServices";
import { textOne } from "../helpers/constans";
import { textTwo } from "../helpers/constans";
import { cta } from "../helpers/constans";
import { bannercta } from "../helpers/constans";
import { contact } from "../helpers/constans";
import { ourList } from "../helpers/constans";
import { testimonial } from "../helpers/constans";

export default function Home() {
  return (
    <>
      <NavbarMain menu={menuList} />
      <Showcase
        description={textOne}
        showButton={true}
        showText={true}
        showImg={true}
      />
      <OurServices description={textTwo} list={ourList} />
      <Benefit description={cta} list={benefitList} />
      <Testimonial testiList={testimonial} />
      <Banner description={bannercta} />
      <Faq question={FAQ} />
      <Footer contactUs={contact} menu={menuList} />
    </>
  );
}
