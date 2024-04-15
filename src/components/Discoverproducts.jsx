import React, { useEffect, useState } from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function DiscoverProducts() {
  const [discoverProducts, setDiscoverProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);

  const getDiscoverProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setDiscoverProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDiscoverProducts();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Calculate the index of the first and last item to display
  const indexOfLastItem = currentPage * 8;
  const indexOfFirstItem = indexOfLastItem - 8;
  const currentProducts = discoverProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-8 ml-60 relative">
      <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Discover Products</h1>
      <div className="flex justify-end mr-20 mb-4 relative">
        <button onClick={toggleCategories} className="flex items-center font-bold py-2 px-4 rounded-full border border-green-600 ">
           <TbFilterSearch className="mr-2" />
              Filters
        </button>
      </div>
       {showCategories && (
  <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md py-2 px-4 z-10">
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Stationery Supplies</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Electronics and Gadgets</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Food and Snacks</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Personal Care Items</li>
  </ul>
)}

      <div className="flex flex-wrap justify-center gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-64 border border-gray-300 rounded-lg p-2 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 overflow-hidden mb-2">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">{product.title}</p>
              <p className="text-gray-600">{product.rating.rate} stars</p>
              <p className="text-gray-600 text-center">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 mr-4"
        >
          <FaCaretLeft /> {/* Left Icon */}
        </button>
        <p>{currentPage}</p>
        <button
          onClick={handleNextPage}
          disabled={currentProducts.length < 8}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 ml-4"
        >
          <FaCaretRight /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default DiscoverProducts;
