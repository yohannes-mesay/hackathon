import React, { useEffect, useState } from 'react';

function OrderDetails() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getOrderDetails = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  const scrollContainer = (scrollValue) => {
    setScrollLeft(scrollLeft + scrollValue);
    document.getElementById('scroll-content').scrollLeft += scrollValue;
  };

  return (
    <div className="bg-gray-200">
      <h1 className="text-3xl text-green-600 font-bold mb-8 mt-8 ml-8">Order Status</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(-100)}
        >
          &lt;
        </button>
        <div
          id="scroll-content"
          className="flex overflow-x-hidden space-x-4"
          style={{ scrollBehavior: 'smooth', scrollLeft: scrollLeft + 'px' }}
        >
          {orderDetails.map((orderItem) => (
            <div key={orderItem.id} className="w-64 border border-gray-300 rounded-lg p-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 overflow-hidden mb-2">
                  <img src={orderItem.image} alt={orderItem.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">{orderItem.title}</p>
                <p className="text-gray-600 text-center">Price: ${orderItem.price}</p>
                <button className="border-2 border-green-500 rounded-lg px-4 py-1 mt-2 focus:outline-none">
                  Delivered
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(100)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;
