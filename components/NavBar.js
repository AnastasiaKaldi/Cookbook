import React, { useState, useEffect, useRef } from "react";
import hamburgermenu from "../public/hamburgermenu.png";
import Image from "next/image";
import Link from "next/link";
import home from "../public/home.png";
import salty from "../public/salty.png";
import dessert from "../public/dessert.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="NavBar">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Image src={hamburgermenu} />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className="flex flex-col space-y-4">
            <Link href="/" passHref>
              <DropdownItem src={home} text={"Home"} />
            </Link>
            <Link href="/meat" passHref>
              <DropdownItem src={salty} text={"Salty"} />
            </Link>
            <Link href="/cookies" passHref>
              <DropdownItem src={dessert} text={"Dessert"} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  const { to, src, text } = props;
  return (
    <p className="dropdownItem">
      <Image src={src} />
      <b>{text}</b>
    </p>
  );
}

export default NavBar;
