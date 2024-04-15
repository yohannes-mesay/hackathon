import React, { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

function Featuredservices() {
  const [featuredServices, setFeaturedServices] = useState([]);
  const [scrollLeft, setScrollLeft] = useState(0);

  const getFeaturedServices = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setFeaturedServices(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeaturedServices();
  }, []);

  const scrollContainer = (scrollValue) => {
    setScrollLeft(scrollLeft + scrollValue);
    document.getElementById('scroll-content').scrollLeft += scrollValue;
  };

  return (
    <div className="p-8 ml-60">
      <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Featured Services</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(-100)}
        >
          <FaCaretLeft />
        </button>
        <div
          id="scroll-content"
          className="flex overflow-x-hidden space-x-4"
          style={{ scrollBehavior: 'smooth', scrollLeft: scrollLeft + 'px' }}
        >
          {featuredServices.map((service) => (
            <div key={service.id} className="w-64 border border-gray-300 rounded-lg p-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 overflow-hidden mb-2">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">{service.title}</p>
                <p className="text-gray-600">{service.rating.rate} stars</p>
                <p className="text-gray-600 text-center">Price: ${service.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(100)}
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
}

export default Featuredservices;
