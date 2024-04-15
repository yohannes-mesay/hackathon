import React, { useState, useEffect } from "react";

import { IoSearch } from "react-icons/io5";

// Sample data
const ordersData = [
  {
    id: 1,
    type: "Products",
    name: "Laptop",
    price: 999,
    image: "",
    date: "3/31/2024",
  },
  {
    id: 2,
    type: "Products",
    name: "T-shirt",
    price: 25,
    image: "",
    date: "3/29/2024",
  },
  {
    id: 3,
    type: "Events",
    name: "TechFest",
    price: 50,
    image: "",
    date: "3/28/2024",
  },
  {
    id: 4,
    type: "Products",
    name: "Novel",
    price: 599,
    image: "",
    date: "3/27/2024",
  },
  {
    id: 5,
    type: "Services",
    name: "Delivery",
    price: 15,
    image: "",
    date: "3/25/2024",
  },
];

function Orders() {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    setFilteredOrders(ordersData);
  }, []);

  useEffect(() => {
    // Filter orders based on search query
    const filtered = ordersData.filter((order) =>
      order.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchQuery]);

  const handleOrderSelect = (orderId) => {
    const order = ordersData.find((order) => order.id === orderId);
    setSelectedOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div className="container mx-auto px-4 py-8 ml-60">
      <div
        className="overflow-x-auto"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ul className="flex flex-nowrap space-x-4 pb-4">
          {selectedOrders.map((order) => (
            <li
              key={order.id}
              className="flex-shrink-0 w-64 border p-4 rounded-md hover:shadow-md transition duration-300"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-40 object-cover mb-2"
              />
              <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">
                {order.name}
              </p>
              <p className="text-center mt-1 text-gray-500">{order.type}</p>
              <p className="text-center mt-1 text-gray-500">
                Date: {order.date}
              </p>
              <p className="text-gray-600 text-center">Price: ${order.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative ml-60">
        <input
          type="text"
          placeholder=" Search by type  "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-10 py-2 mb-4 w-96"
        />
        <IoSearch className="absolute top-3 left-3 text-gray-500" />
      </div>

      <h2 className="ml-60 text-3xl text-green-600 font-bold">New Orders</h2>
      <div
        className="ml-60 overflow-x-auto p-6"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ul className="flex flex-nowrap space-x-4 pb-4">
          {filteredOrders.map((order) => (
            <li
              key={order.id}
              className="flex-shrink-0 w-64 border p-4 rounded-md hover:shadow-lg transition duration-300"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-full h-40 overflow-hidden object-cover mb-2"
              />
              <div>
                {order.name} - ${order.price}
              </div>
              <p className="text-gray-500">Type: {order.type}</p>
              <p className="text-gray-500">Date: {order.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
