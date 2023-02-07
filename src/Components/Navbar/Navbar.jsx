import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleMenuButton = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className="px-1 navbar">
      <Link to="/" className="navbar__header">
        fakeshop
      </Link>
      <div className="navbar__searchbar">
        <form>
          <input type="text" placeholder="Search anything" />
          <button>
            <CiSearch size={25} />
          </button>
        </form>
      </div>
      <div className="navbar__controller">
        <GiHamburgerMenu
          size={30}
          color="white"
          onClick={() => handleMenuButton()}
        />
      </div>
      <div className={toggle ? "navbar__links open" : "navbar__links"}>
        <ul>
          <Link to="/" className="li">
            Welcome! Prabhat
          </Link>
          <Link to="/" className="li">
            Home
          </Link>
          <Link to="/" className="li">
            Product
          </Link>
          <Link to="/" className="li">
            About
          </Link>
          <Link to="/" className="li">
            Contact
          </Link>
          <Link to="/cart" className="li">
            <BsCart3 size={20} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
