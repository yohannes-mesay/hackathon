import React, { useEffect, useState } from 'react';
import { TbFilterSearch } from "react-icons/tb";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

function ExploreEvents() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategories, setShowCategories] = useState(false);

  const getExploreEvents = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExploreEvents();
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

  // Calculate the index of the first and last event to display
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-8 ml-60 relative">
      <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Explore Events</h1>
      <div className="flex justify-end mr-20 mb-4 relative">
        <button onClick={toggleCategories} className="flex items-center font-bold py-2 px-4 rounded-full border border-green-600 ">
           <TbFilterSearch className="mr-2" />
              Filters
        </button>
      </div>
       {showCategories && (
  <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md py-2 px-4 z-10">
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Conferences</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Workshops</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Seminars</li>
    <li className="cursor-pointer py-1 px-2 hover:bg-[#77D0B0]">Exhibitions</li>
  </ul>
)}
      
      <div className="flex flex-wrap justify-center gap-4">
        {currentEvents.map((event) => (
          <div key={event.id} className="w-64 border border-gray-300 rounded-lg p-2 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 overflow-hidden mb-2">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-2 max-h-16 overflow-hidden whitespace-normal">{event.title}</p>
              <p className="text-gray-600 text-center">Date: {event.date}</p>
              <p className="text-gray-600 text-center">Location: {event.location}</p>
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
          disabled={currentEvents.length < itemsPerPage}
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200 ml-4"
        >
          <FaCaretRight /> {/* Right Icon */}
        </button>
      </div>
    </div>
  );
}

export default ExploreEvents;
