import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import "./Star.scss";

const Star = ({ data }) => {
  const { rating } = data;
  const starRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <>
        {rating && (
          <span key={index}>
            {rating.rate >= index + 1 ? (
              <BsStarFill className="rating__icon" />
            ) : rating.rate >= number ? (
              <BsStarHalf className="rating__icon" />
            ) : (
              <BsStar className="rating__icon" />
            )}
          </span>
        )}
      </>
    );
  });
  return (
    <>
      {rating && (
        <div className="my-2">
          {starRating}
          <p className="rating__reviews">({rating.count} people reviewed)</p>
        </div>
      )}
    </>
  );
};

export default Star;
