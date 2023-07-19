import React, { useState } from "react";
import Image from "next/image";
import chokcookie from "../styles/background/chokcookie.jpeg";
import doublechock from "../styles/background/doublechock.jpeg";
import cinnamon from "../styles/background/cinnamon.jpeg";

const Cookies = () => {
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
    <section className="cookies">
      <div className="">
        <div className="">
          <div className=""></div>
          <div className=" ImageC space-x-40 flex p-10">
            <Image
              src={chokcookie}
              className="Image backgroundC max-w-sm"
              onClick={handleItemClick1}
            />
            <figcaption>Caption for Image 1</figcaption>
            <Image
              src={doublechock}
              className="Image backgroundC max-w-sm"
              onClick={handleItemClick2}
            />
            <Image
              src={cinnamon}
              className="Image backgroundC max-w-sm"
              onClick={handleItemClick3}
            />
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
        </div>
      </div>
    </section>
  );
};

export default Cookies;
