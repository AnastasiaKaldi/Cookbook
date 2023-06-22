import React from "react";

const Homepage = () => {
  return (
    <section
      className="homebg - [url('/food.jpeg')]"
      bg-cover
      bg-center
      bg-fixed
    >
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4x1 mb-8">Welcome to the Cookbook!</h1>
          <h2 className="summary text-white mt- [-150px]">
            This website is the ultimate destination for all things
            food-related. Whether you're an experienced home chef or a beginner
            in the kitchen, we have a wide variety of recipes that will
            tantalize your taste buds and inspire your culinary creativity
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
