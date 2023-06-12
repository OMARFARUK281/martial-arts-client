import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MartialArts from "../MartialArts/MartialArts";
import Carousel from "../Carousel/Carousel";
import Martials from "../Martial/Martials";
import Featured from "../Featured/Featured";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Martial Atrs | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Carousel></Carousel>
      <MartialArts></MartialArts>
      <Martials></Martials>
      <Featured></Featured>
    </div>
  );
};

export default Home;
