import React, { useState } from "react";
// Import the CSS file for styling

const CookiesRecipies = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <section
      className={`cookiesrecipies ${isHovered ? "hovered" : ""}`}
      bg-cover
      bg-center
      bg-fixed
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {/* Your component content */}
    </section>
  );
};

export default CookiesRecipies;
