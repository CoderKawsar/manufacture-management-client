import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const [rating, setRating] = useState({});
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const review = event.target.review.value;
    axios.post("https://serene-dawn-73243.herokuapp.com/reviews", {
      name,
      rating,
      review,
    });
    event.target.reset();
    toast("Review Submitted!");
  };
  return (
    <div>
      <form className="w-96" onSubmit={handleReviewSubmit}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Name:</span>
          </label>
          <input type="text" name="name" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">
              Review Description:{" "}
            </span>
          </label>
          <textarea
            type="text"
            name="review"
            className="input input-bordered h-32"
          />
        </div>
        <p className="label-text font-semibold mt-4">Rating: </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#fb923c]"
            onClick={() => setRating(1)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#fb923c]"
            defaultChecked
            onClick={() => setRating(2)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#fb923c]"
            onClick={() => setRating(3)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#fb923c]"
            onClick={() => setRating(4)}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-[#fb923c]"
            onClick={() => setRating(5)}
          />
        </div>
        <br />
        <input
          type="submit"
          className="btn bg-siteColor mt-4 mb-8 border-0"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
