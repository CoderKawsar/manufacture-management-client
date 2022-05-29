import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.config";
import Tool from "../Home/Tool";
import "./Purchase.css";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const [tool, setTool] = useState({});
  const [validPurchaseQuantity, setValidPurchaseQuantity] = useState(true);
  let { id } = useParams();

  const url = `http://localhost:5000/tools/${id}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      const toolData = res.data;
      setTool(toolData);
    });
  }, [url]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  let purchase_quantity;
  const handlePurchaseQuantity = (event) => {
    purchase_quantity = event.target.value;
    if (
      purchase_quantity >= tool?.min_order_quantity &&
      purchase_quantity <= tool?.available_quantity
    ) {
      setValidPurchaseQuantity(true);
    } else {
      setValidPurchaseQuantity(false);
    }
  };

  const handlePurchase = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const productId = tool?._id;
    const uid = user.uid;
    const purchase_quantity = event.target.purchase_quantity.value;
    const service = {
      name,
      email,
      phone,
      address,
      productId,
      uid,
      purchase_quantity,
    };
    axios.post("http://localhost:5000/orders", service);
    event.target.reset();
    toast("Order Requested");
  };
  return (
    <div className="purchase w-11/12 mx-auto">
      <h3 className="text-5xl font-bold text-center mt-12 mb-12">Purchase</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="mx-auto">
          <Tool tool={tool} />
        </div>
        <div>
          <form className="mb-12 max-w-md mx-auto" onSubmit={handlePurchase}>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={user?.phoneNumber}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <textarea
                name="address"
                className="input input-bordered h-24"
              ></textarea>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text font-semibold">
                  Purchase Quantity
                </span>
              </label>
              <input
                type="number"
                name="purchase_quantity"
                defaultValue={tool?.min_order_quantity}
                className="input input-bordered"
                onChange={handlePurchaseQuantity}
              />
            </div>
            {!validPurchaseQuantity && (
              <p className="text-red">
                Mininum Quantity: {tool?.min_order_quantity}, Maximum Quantity:{" "}
                {tool?.available_quantity}
              </p>
            )}
            <input
              type="submit"
              value="Purchase"
              disabled={!validPurchaseQuantity}
              className="btn bg-siteColor border-0 px-6 mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
