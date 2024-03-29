import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "./Review";

const Reviews = () => {
  const [reviews] = useReviews(3);
  return (
    <div className="w-11/12 mx-auto mt-24">
      <h3 className="text-5xl font-bold text-center mb-8">Reviews</h3>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((singleReview) => (
          <Review key={singleReview._id} singleReview={singleReview} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
