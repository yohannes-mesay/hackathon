import React, { useEffect, useState } from 'react';
import Featuredservices from '../components/Featuredservices'
import ServiceCatalog from '../components/ServiceCatalog'
function Service() {
  const [testimonies, setTestimonies] = useState([]);

  const getTestimonies = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // Limit the number of testimonies to display
      const limitedTestimonies = data.slice(0, 3);
      setTestimonies(limitedTestimonies);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTestimonies();
  }, []);

  return (
    <div>
      <Featuredservices />
      <ServiceCatalog />
      <div className="p-8 ml-60">
        <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Testimonials</h1>
        <div className="flex justify-center gap-12">
          {/* Render testimonies */}
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="flex-shrink-0">
              <div className="rounded-full overflow-hidden border border-gray-300">
                <img src={testimony.image} alt={testimony.author} className="w-32 h-32 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
