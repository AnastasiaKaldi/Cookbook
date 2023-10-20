import React, { useState } from "react";
import Image from "next/image";
import bourguignon from "../styles/background/bourguignon.jpg";
import Kalabhuna from "../styles/background/Kalabhuna.jpg";
import lasanga from "../styles/background/lasagnasoup.jpg";
import bacon from "../styles/background/bacon.jpg";
import chokcookie from "../styles/background/chokcookie.jpg";
import doublechock from "../styles/background/doublechock.jpg";
import cinnamon from "../styles/background/cinnamon.jpg";
import mosaiko from "../styles/background/mosaiko.jpg";

const RecipeSlider = [
  bourguignon,
  Kalabhuna,
  lasanga,
  bacon,
  chokcookie,
  doublechock,
  cinnamon,
  mosaiko,
];

const Recipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex >= RecipeSlider.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(RecipeSlider.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className="recbg"
      style={{
        background: `url(${RecipeSlider[currentIndex]}) center/cover fixed`,
      }}
    >
      <div className="container mx-auto text-white text-center">
        <h1 className="theText mb-24">Here's a taste of our recipes!</h1>
      </div>
      <div className="carousel">
        <button className="carousel__btn mx-96" onClick={prevImage}>
          &lt;
        </button>
        <Image
          src={RecipeSlider[currentIndex]}
          alt="Recipe Image"
          className="carousel__image"
          style={{ width: "900px", height: "500px" }}
        />
        <button className="carousel__btn mx-96" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Recipe;
