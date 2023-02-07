import React from "react";
import BestOffers from "../BestOffers/BestOffers";
import Navbar from "../Navbar/Navbar";

import { useSelector } from "react-redux";

import "./Homepage.scss";
import { Link } from "react-router-dom";

const Homepage = () => {
  const categories = useSelector((state) => state.shop.categories);
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div className="text-center h1 fw-bold my-5">Pick a Category</div>
      <div className="home__categories d-lg-flex">
        {categories ? (
          categories.map((item, index) => {
            return (
              <>
                <Link
                  to={`/category/${item}`}
                  className="category__card flex-wrap text-dark text-decoration-none"
                  key={index}
                >
                  <div className="category__card__image">
                    <img
                      src="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="category__card__title">{item}</div>
                </Link>
              </>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Homepage;
