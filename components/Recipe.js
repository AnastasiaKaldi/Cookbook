import { Container } from "postcss";
import React from "react";

const Recipe = () => {
  return (
    <section
      className="recbg - [url('/recipies.svg')]"
      bg-cover
      bg-center
      bg-fixed
    >
      <div className="container mx-auto text-white text-center">
        <h1 className="theText mb-24">Here's a taste of our recipies!</h1>
      </div>
    </section>
  );
};

export default Recipe;
