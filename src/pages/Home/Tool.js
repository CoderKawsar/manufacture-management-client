import React from "react";
import { Link } from "react-router-dom";
import Tools from "./Tools";

const Tool = ({ tool }) => {
  const gotoLink = `/tools/${tool._id}`;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-64" src={tool.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p>
          <span className="font-bold">Details: </span>
          {tool?.description}
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
          <Link to={gotoLink} className="btn bg-siteColor border-0">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
