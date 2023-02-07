import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearSelectedItem,
  fetchItemByProductId,
} from "../../Features/ShopSlice";
import { addItemsToCart } from "../../Features/CartSlice";
import Navbar from "../Navbar/Navbar";
import Star from "../Star/Star";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(true);
  const params = useParams();
  const { productID } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItemByProductId(productID));
    return () => {
      dispatch(clearSelectedItem());
    };
  }, [productID]);
  const data = useSelector((state) => state.shop.selectedItem);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    if (count <= 1) {
      return setCount(1);
    }
  };
  const handleSubmit = () => {
    {
      data &&
        added &&
        dispatch(
          addItemsToCart({
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image,
            count,
          })
        );
    }
    setAdded(false);
    navigate("/cart");
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row details">
          {data ? (
            <>
              <div className=" col-12 col-lg-6 details__image">
                <img src={data.image} alt="" />
              </div>
              <div className="col-12 col-lg-6 details__container">
                <div className="product__name">{data.title}</div>
                <div className="product__price">Rs. {data.price}</div>
                <div className="product__category">
                  Category:
                  <Link
                    to={`/category/${data.category}`}
                    style={{
                      color: "#fd8f5f",
                      textDecoration: "none",
                      marginLeft: "5px",
                    }}
                  >
                    {data.category}
                  </Link>
                </div>
                <div className="product__availability">
                  Availibility: <span>IN STOCK</span>
                </div>
                <Star data={data} />
                <hr />
                <div className="product__description">{data.description}</div>
                <hr />
                <div className="product__count__button">
                  <span onClick={() => handleIncrement()}>
                    <AiOutlinePlus size={15} />
                  </span>
                  <span>{count}</span>
                  <span>
                    <AiOutlineMinus
                      size={15}
                      onClick={() => handleDecrement()}
                    />
                  </span>
                </div>
                <button
                  className="product__to__cart"
                  onClick={() => handleSubmit()}
                >
                  Add to Cart
                </button>
              </div>
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
