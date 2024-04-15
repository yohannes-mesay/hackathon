import React, { useEffect, useState } from 'react';

function Topsellers() {
  const [topSellers, setTopSellers] = useState([]);

  const getTopSellers = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // Limit the number of images to 5
      const topSellersData = data.slice(0, 5);
      setTopSellers(topSellersData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopSellers();
  }, []);

  return (
    <div className="p-8 ml-60">
      <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Top Sellers</h1>
      <div className="flex justify-center gap-12">
        {topSellers.map((product) => (
          <div key={product.id} className="flex-shrink-0">
            <div className="rounded-full overflow-hidden border border-gray-300">
              <img src={product.image} alt={product.title} className="w-32 h-32 object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topsellers;
