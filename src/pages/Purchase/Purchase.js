import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);

  const handlePurchase = (event) => {
    event.preventDefault();
  };
  console.log(user);
  return (
    <div className="purchase">
      <h3 className="text-5xl font-bold text-center mt-12 mb-12">Purchase</h3>
      <form className="w-full max-w-sm mx-auto mb-12" onSubmit={handlePurchase}>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Name</span>
          </label>
          <input type="text" name="name" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input type="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control mt-2">
          <label className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </label>
          <input type="text" name="phone" className="input input-bordered" />
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
        <input
          type="submit"
          value="Purchase"
          className="btn bg-siteColor border-0 px-6 mt-4"
        />
      </form>
    </div>
  );
};

export default Purchase;
