import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCategories, fetchItemByCategory } from "../../Features/ShopSlice";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";

import "./Categories.scss";

const Categories = () => {
  const [filter, setFilter] = useState("ascending");
  const params = useParams();
  const { categoryItem } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoryItem) {
      dispatch(fetchItemByCategory({ categoryItem, filter }));
    }
    return () => {
      dispatch(clearCategories());
    };
  }, [filter]);
  const data = useSelector((state) => state.shop.shopItems);
  return (
    <>
      <Navbar />
      <div className="category">
        <div className="category__title">{categoryItem}</div>
        <div className="dropdown category__filter">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <div className="dropdown-item" onClick={() => setFilter("asc")}>
                Price: High to Low
              </div>
            </li>
            <li>
              <div className="dropdown-item" onClick={() => setFilter("desc")}>
                Price: Low to High
              </div>
            </li>
          </ul>
        </div>
        <div className="h3 mx-5">{data ? data.length : <></>} items found</div>
        <div className="category__container row gx-4 gy-5">
          {data ? (
            data.map((item) => {
              return (
                <>
                  <div className="col-12 col-lg-4">
                    <ProductCard item={item} key={item.id} />
                  </div>
                </>
              );
            })
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
