import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const img = event.target.img.value;
    const available_quantity = event.target.available_quantity.value;
    const min_order_quantity = event.target.min_order_quantity.value;
    const product = {
      name,
      price,
      description,
      img,
      available_quantity,
      min_order_quantity,
    };
    axios.post("https://manufacture-site.onrender.com/tools", product);
    event.target.reset();
    toast.success("Product Added!");
  };
  return (
    <div>
      <form className="w-96" onSubmit={handleAddProduct}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Tool Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Tool Price</span>
          </label>
          <input type="number" name="price" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Tool Description</span>
          </label>
          <textarea
            type="text"
            name="description"
            className="input input-bordered h-16"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Tool Image Link</span>
          </label>
          <input type="text" name="img" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Available Quantity</span>
          </label>
          <input
            type="text"
            name="available_quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">
              Minimum Order Quantity
            </span>
          </label>
          <input
            type="text"
            name="min_order_quantity"
            className="input input-bordered"
          />
        </div>
        <input
          type="submit"
          className="btn bg-siteColor mt-4 mb-8 border-0"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
