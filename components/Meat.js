import React, { useState } from "react";
import Image from "next/image";
import cobb from "../styles/background/cobbsalad.jpeg";
import gemista from "../styles/background/gemista.jpeg";
import lasanga from "../styles/background/lasagnasoup.jpeg";
import japegg from "../styles/background/japegg.jpeg";

const Meat = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);

  const handleItemClick1 = () => {
    setShowPopup1(true);
  };

  const handleItemClick2 = () => {
    setShowPopup2(true);
  };

  const handleItemClick3 = () => {
    setShowPopup3(true);
  };

  const handleItemClick4 = () => {
    setShowPopup4(true);
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

  const handleClosePopup4 = () => {
    setShowPopup4(false);
  };

  return (
    <section className="salty">
      <div className="mx-auto items-center justify-center">
        <h1 className="destext  mb-10 text-rose-950 absolute top-60 left-1/2 transform -translate-x-1/2">
          The Salty section
        </h1>
        <div className="">
          <div className=""></div>
          <div className="ImageC space-x-40 flex p-10">
            {/* First Image */}
            <div className="image-caption-container">
              <Image
                src={cobb}
                className="Image backgroundC w-full h-56"
                onClick={handleItemClick1}
              />
              <figcaption className="mt-3 font-serif">Cobb Salad</figcaption>
            </div>
            {/* Second Image */}
            <div className="image-caption-container h-56">
              <Image
                src={gemista}
                className="Image backgroundC w-full"
                onClick={handleItemClick2}
              />
              <figcaption className="mt-3 font-serif">Gemista</figcaption>
            </div>
            {/* Third Image */}
            <div className="image-caption-container">
              <Image
                src={lasanga}
                className="Image backgroundC w-full h-56"
                onClick={handleItemClick3}
              />
              <figcaption className="mt-3 font-serif">Lasagna Soup</figcaption>
            </div>
            {/* Fourth Image */}
            <div className="image-caption-container">
              <Image
                src={japegg}
                className="Image backgroundC w-full h-56"
                onClick={handleItemClick4}
              />
              <figcaption className="mt-3 font-serif">
                Japanese Egg Sandwich
              </figcaption>
            </div>
          </div>

          {showPopup1 && (
            <div className="popup">
              <div className="popup-content">
                <h2 className="text-4xl underline font-serif text-white">
                  Chocolate Chip Cookies
                </h2>
                <p className="text-xl text-white">
                  <br />
                  <br />
                  Prep time: 10-15 mins <br /> Cook time: 20-25 mins <br />
                  Total time: 30-40 mins <br />
                  <br />
                </p>
                <p className="text-xl text-white">
                  Ingredients: <br /> 2 eggs <br />
                  1 tsp. Salt
                  <br />
                  1/2 a bar of milk chocolate (can be changed depending on
                  preference)
                  <br />
                  1/2 a bar of dark chocolate (can be changed depending on
                  preference)
                  <br />
                  1 tbsp. vanilla extract
                  <br />
                  1 tsp. baking soda
                  <br />
                  100g butter <br />
                  20g olive oil
                  <br />
                  250g all purpose flour
                  <br />
                  50g granulated sugar <br />
                  60g brown sugar <br />
                  <br />
                </p>
                <p className="text-xl text-white">
                  Instructions: <br />
                  1. Preheat the oven to 175 ℃<br />
                  2. Start by melting the butter in a small pot or pan, on a
                  medium heat. Stir frequently. Once you see that the colour of
                  the butter is a golden brown take it off the heat and ideally
                  let it cool down. <br />
                  3. In the meantime, mix the salt, the flour and baking soda
                  together after sifting. <br />
                  4. Transfer the melted butter to a boll and add the olive oil
                  and both the granulated and the brown sugar, until they are
                  completely absorbed into the mix.
                  <br />
                  5. Add the two eggs one by one and make sure you continue to
                  mix until they can no longer be seen in the mix and then add
                  the vanilla extract.
                  <br />
                  6. Mix the dry with the wet ingredients and add your desired
                  kind and amount of chocolate. <br />
                  7. Form little balls and place them on a baking tray with
                  parchment paper. This is optional, but you could also add some
                  additional pieces of chocolate on to the cookies.
                  <br />
                  8. Bake for 20 to 25 minutes <br />
                  <br />
                </p>
                <button onClick={handleClosePopup1}>◉</button>
              </div>
            </div>
          )}

          {showPopup2 && (
            <div className="popup">
              <div className="popup-content">
                <h1 className="text-4xl underline font-serif">
                  Double Chocolate Cookies
                </h1>
                <p>This is the content of pop-up 2.</p>
                <button onClick={handleClosePopup2}>◉</button>
              </div>
            </div>
          )}

          {showPopup3 && (
            <div className="popup">
              <div className="popup-content">
                <h2 className="text-4xl underline font-serif">
                  Cinnamon Cookies
                </h2>
                <p>This is the content of pop-up 3.</p>
                <button onClick={handleClosePopup3}>◉</button>
              </div>
            </div>
          )}
          {showPopup4 && (
            <div className="popup">
              <div className="popup-content">
                <h2 className="text-4xl underline font-serif">
                  Cinnamon Cookies
                </h2>
                <p>This is the content of pop-up 4.</p>
                <button onClick={handleClosePopup4}>◉</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Meat;
