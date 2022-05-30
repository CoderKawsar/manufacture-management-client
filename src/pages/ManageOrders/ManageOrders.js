import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("https://serene-dawn-73243.herokuapp.com/orders/").then((res) => {
      const ordersData = res.data;
      setOrders(ordersData);
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Purchase Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.phone}</td>
                <td>{order?.address}</td>
                <td>{order?.purchase_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
