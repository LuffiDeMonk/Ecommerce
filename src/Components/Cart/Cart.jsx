import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import {
  increaseCount,
  decreaseCount,
  deleteItem,
  computeTotal,
} from "../../../src/Features/CartSlice";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import "./Cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(computeTotal());
  }, [cartData]);
  const handleItemIncrement = (item) => {
    dispatch(increaseCount(item));
  };
  const handleItemDecrement = (item) => {
    dispatch(decreaseCount(item));
  };
  const handleDelete = (item) => {
    dispatch(deleteItem(item.id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="table-responsive">
          <table className="table align-middle table-sm my-4">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartData.length !== 0 ? (
                cartData.map((item) => {
                  return (
                    <>
                      <tr scope="row" key={item.id}>
                        <td className="d-flex align-items-center">
                          <div className="item__image mx-2">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="item__title">{item.title}</div>
                        </td>
                        <td>
                          <div className="item__price">Rs. {item.price}</div>
                        </td>
                        <td>
                          <div className="item__counter">
                            <span onClick={() => handleItemIncrement(item)}>
                              <AiOutlinePlus size={15} />
                            </span>
                            <span>{item.count}</span>
                            <span onClick={() => handleItemDecrement(item)}>
                              <AiOutlineMinus size={15} />
                            </span>
                          </div>
                        </td>
                        <td className="item__total">Rs. {item.totalPrice}</td>
                        <td
                          onClick={() => handleDelete(item)}
                          className="item__delete"
                        >
                          <FiTrash size={21} />
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <h2>No items in the cart</h2>
              )}
            </tbody>
          </table>
          <div className="d-flex justify-content-between my-2">
            <Link to="/" className="redirect">
              Continue Shopping
            </Link>
            <div className="cart__total">Grand Total: Rs. {grandTotal}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
