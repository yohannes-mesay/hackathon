import React, { useState, useEffect, useRef } from 'react';
import phone_image from '/assets/Images/phone_image.jpg';



const NewOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const scrollContainerRef = useRef(null);

  
  const simulatedOrders = [
    { id: 1, product: 'Backpack', price: 39.99, rating: null, image: phone_image },
    { id: 2, product: 'T-Shirt', price: 19.99, rating: null, image: phone_image  },
    { id: 3, product: 'Laptop', price: 899.99, rating: null, image: phone_image },
    { id: 4, product: 'Water Bottle', price: 9.99, rating: null, image: phone_image  },
    { id: 5, product: 'Headphones', price: 49.99, rating: null, image: phone_image},
    { id: 6, product: 'Sunglasses', price: 29.99, rating: null, image: phone_image },
    { id: 7, product: 'Jeans', price: 59.99, rating: null, image: phone_image },
    { id: 8, product: 'Smartphone', price: 699.99, rating: null, image: phone_image },
    
  ];

  useEffect(() => {
    
    setOrders(simulatedOrders);
  }, []);

  const handleRatingClick = (orderId, rating) => {
   
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
       
        return { ...order, rating: order.rating === rating ? null : rating };
      }
      return order;
    });

    
    setOrders(updatedOrders);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="relative mb-8 bg-gray-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-green-600">New Orders</h1>

        <div
          className="flex relative overflow-x-auto"
          ref={scrollContainerRef}
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {orders.map(order => (
            <div key={order.id} className="border rounded-lg overflow-hidden mx-1 my-4 bg-white shadow-md" style={{ minWidth: '80px', flex: '0 0 auto' }}>
              <div className="p-2">
                <img src={order.image} alt={order.product} className="w-full h-auto rounded-lg" style={{ padding: '8px' }} />
              </div>

              <div className="p-4">
                <p className="font-semibold text-green-600">{order.product}</p>
                <p className="text-gray-600">Price: ${order.price}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-4 w-4 fill-current cursor-pointer ${index < (order.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      onClick={() => handleRatingClick(order.id, index + 1)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0c-.268 0-.52.105-.707.293L6 4.586 0 5l3.077 8.817L2 20l8-5 8 5-1.077-6.183L20 5l-6-1.414L10 0zm0 2.787l1.819 4.978-.479 1.775 1.477.964-4.157.34-1.66 3.836L6 14.962l1.481-1.167-1.66-3.837-4.158-.34 1.478-.964-.48-1.775L10 2.787zM10 13.96l-3.445 2.153.83-4.827-3.346-3.27 4.63-.418L10 5.145l1.333 2.462 4.63.418-3.345 3.27.83 4.827L10 13.961z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewOrdersPage;
