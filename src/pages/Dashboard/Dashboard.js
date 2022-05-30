import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const [userData] = useUser();
  const admin = userData?.role === "admin";
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-5xl font-bold mt-12 text-center mb-16">Dashboard</h2>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="add-review">Add a Review</Link>
            </li>
            <li>
              <Link to="my-profile">My Profile</Link>
            </li>
            {admin && (
              <li>
                <Link to="make-admin">Make Admin</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="manage-orders">Manage Orders</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="add-product">Add Product/Tool</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
