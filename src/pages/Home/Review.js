import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = ({ singleReview }) => {
  const { name, review, rating } = singleReview;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mx-auto mb-2">{name}</h2>
        <p className="text-justify">
          {review.length > 250 ? review.substring(0, 250) + " . . ." : review}
        </p>
        <div className="card-actions justify-center mt-4">
          {Array.apply(null, Array(rating)).map((i, index) => (
            <FontAwesomeIcon
              className="active-star"
              key={index}
              icon={faStar}
            />
          ))}
          {Array.apply(null, Array(5 - rating)).map((i, index) => (
            <FontAwesomeIcon key={index} icon={faStar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
