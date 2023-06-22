import React, { useState } from "react";
import Link from "next/link";

const NavBarCookies = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="navcookies top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px">
        <div
          className="heading text-4xl text-white"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          The Cookbook
        </div>

        <div className="flex gap-6">
          <Link href="/" passHref>
            <div
              className="hover:text-[rgb(57,174,172)] text-white cursor-pointer relative"
              onMouseEnter={() => handleDropdownEnter(0)}
              onMouseLeave={handleDropdownLeave}
            >
              Home
            </div>
          </Link>

          <div
            className="hover:text-[rgb(255,255,255)] text-white cursor-pointer relative"
            onMouseEnter={() => handleDropdownEnter(1)}
            onMouseLeave={handleDropdownLeave}
          >
            Salty
            {activeDropdown === 1 && (
              <div className="dropdown-menu-cookies absolute bg-White shadow">
                <Link href="/meat" passHref>
                  <div className="dropdown-item">Meat</div>
                </Link>
                <Link href="/fish" passHref>
                  <div className="dropdown-item">Fish</div>
                </Link>
                <Link href="/vegetarianSalty" passHref>
                  <div className="dropdown-item">Vegetarian</div>
                </Link>
                <Link href="/veganSalty" passHref>
                  <div className="dropdown-item">Vegan</div>
                </Link>
                <Link href="/glutenfreeSalty" passHref>
                  <div className="dropdown-item">gluten-Free</div>
                </Link>
                <Link href="/kosher" passHref>
                  <div className="dropdown-item">Kosher</div>
                </Link>
              </div>
            )}
          </div>

          <div
            className="hover:text-[rgb(255,255,255)] text-white cursor-pointer relative"
            onMouseEnter={() => handleDropdownEnter(2)}
            onMouseLeave={handleDropdownLeave}
          >
            Desserts
            {activeDropdown === 2 && (
              <div className="dropdown-menu-cookies absolute bg-white shadow">
                <Link href="/gfSweet" passHref>
                  <div className="dropdown-item">Gluten-Free</div>
                </Link>
                <Link href="/cookies" passHref>
                  <div className="dropdown-item">Cookies</div>
                </Link>
                <Link href="/vsweet" passHref>
                  <div className="dropdown-item">Vegetarian</div>
                </Link>
                <Link href="/vgsweet" passHref>
                  <div className="dropdown-item">Vegan</div>
                </Link>
              </div>
            )}
          </div>

          <div
            className="hover:text-[rgb(253,255,254)] text-white cursor-pointer relative"
            onMouseEnter={() => handleDropdownEnter(3)}
            onMouseLeave={handleDropdownLeave}
          >
            Pick a Mood
            {activeDropdown === 3 && (
              <div className="dropdown-menu-cookies absolute bg-white shadow">
                <Link href="/20min" passHref>
                  <div className="dropdown-item">Under 20 minutes</div>
                </Link>
                <Link href="/spicy" passHref>
                  <div className="dropdown-item">Spicy</div>
                </Link>
                <Link href="/summer" passHref>
                  <div className="dropdown-item">A taste for the summer</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarCookies;
