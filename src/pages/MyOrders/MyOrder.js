import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = ({ order }) => {
  const { _id, productId, purchase_quantity, address } = order;
  const [tool, setTool] = useState({});

  const url = `https://manufacture-site.onrender.com/tools/${productId}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      const toolData = res.data;
      setTool(toolData);
    });
  }, [url]);

  const handleDelete = (id) => {
    const delUrl = `https://manufacture-site.onrender.com/orders/${id}`;
    axios.delete(delUrl);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-56 w-56" src={tool?.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool?.name}</h2>
        <p>
          <span className="font-semibold">Ordered Quantity: </span>
          {purchase_quantity}
        </p>
        <p>
          <span className="font-semibold">Address: </span>
          {address}
        </p>
        <div
          className="mt-4 card-actions justify-start"
          onClick={() => handleDelete(_id)}
        >
          <button className="btn bg-siteColor border-0">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
