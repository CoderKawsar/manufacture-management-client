import React from "react";

const Tool = ({ tool }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64" src={tool.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>
          <span className="font-bold">Details: </span>If a dog chews shoes whose
          shoes does he choose?
        </p>
        <p>
          <span className="font-bold">Available Quantity: </span>
          {tool.available_quantity}
        </p>
        <p>
          <span className="font-bold">Minimum Order Quantity: </span>
          {tool.min_order_quantity}
        </p>
        <div className="card-actions justify-start mt-4">
          <button className="btn bg-siteColor border-0">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
