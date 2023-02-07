import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="product__card">
      <div className="product__card__image">
        <img src={item.image} alt="" />
      </div>
      <Link
        to={`/item/${item.id}`}
        className="product__card__title text-dark text-decoration-none"
      >
        {item.title}
      </Link>
      <div className="product__card__amount">Rs. {item.price}</div>
    </div>
  );
};

export default ProductCard;
