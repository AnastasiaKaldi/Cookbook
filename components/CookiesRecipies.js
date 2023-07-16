import React, { useState } from "react";
import Image from "next/image";
import chokcookie from "../styles/background/chokcookie.jpeg";
import doublechock from "../styles/background/doublechock.jpeg";
import cinnamon from "../styles/background/cinnamon.jpeg";
// Import the CSS file for styling

const CookiesRecipies = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <section className="image-container">
      <div className="cookiesrecipies">
        <div className="">
          <div className="black-box"></div>
          <div className=" ImageC  space-x-60 flex justify-items-center">
            <Image src={chokcookie} className="Image backgroundC max-w-sm" />
            <Image src={doublechock} className="Image backgroundC max-w-sm" />
            <Image src={cinnamon} className="Image backgroundC max-w-xs" />
          </div>
        </div>
      </div>
      {/* <div className="chockcookie"></div> */}
      {/* <div className="doublechock"></div> */}
      {/* <div className="cinnamon"></div> */}
    </section>
  );
};

export default CookiesRecipies;
