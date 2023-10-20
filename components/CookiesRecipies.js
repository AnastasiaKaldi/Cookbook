import React, { useState } from "react";
import Image from "next/image";
import chokcookie from "../styles/background/chokcookie.jpeg";
import doublechock from "../styles/background/doublechock.jpeg";
import cinnamon from "../styles/background/cinnamon.jpeg";
// Import the CSS file for styling

const CookiesRecipies = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const handleItemClick1 = () => {
    setShowPopup1(true);
  };

  const handleItemClick2 = () => {
    setShowPopup2(true);
  };

  const handleItemClick3 = () => {
    setShowPopup3(true);
  };

  const handleClosePopup1 = () => {
    setShowPopup1(false);
  };

  const handleClosePopup2 = () => {
    setShowPopup2(false);
  };

  const handleClosePopup3 = () => {
    setShowPopup3(false);
  };

  return (
    <section className="image-container">
      <div className="cookiesrecipies"></div>
    </section>
  );
};

export default CookiesRecipies;
