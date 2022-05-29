import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";
import axios from "axios";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const orderUrl = `http://localhost:5000/orders/${user.uid}`;
  useEffect(() => {
    axios.get(orderUrl).then((res) => {
      const ordersData = res.data;
      setOrders(ordersData);
    });
  }, [orderUrl, orders]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {orders.map((order) => (
        <MyOrder order={order} key={order._id} />
      ))}
    </div>
  );
};

export default MyOrders;
