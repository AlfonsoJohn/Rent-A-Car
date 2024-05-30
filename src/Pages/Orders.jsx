import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:3000/auth/orders', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-page">
      <div className="container">
        <h2>Your Car Rental Orders</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Car Type: {order.carType}</p>
              <p>Pick-Up Location: {order.pickUpLocation}</p>
              <p>Drop-Off Location: {order.dropOffLocation}</p>
              <p>Pick-Up Time: {order.pickUpTime}</p>
              <p>Drop-Off Time: {order.dropOffTime}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
