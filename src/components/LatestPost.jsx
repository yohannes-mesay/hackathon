import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoStarHalf } from "react-icons/io5";

const LatestPost = ({ posts }) => {
  const [filters, setFilters] = useState({
    type: "", // Initial filter state for type (product, event, service)
  });

  const [visiblePosts, setVisiblePosts] = useState(posts); // State variable to store visible posts

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });

    // Filter posts based on selected type
    const filteredPosts = value
      ? posts.filter((post) => post.type === value)
      : posts;
    setVisiblePosts(filteredPosts);
  };

  const removePost = (id) => {
    setVisiblePosts(visiblePosts.filter((post) => post.id !== id));
  };

  return (
    <div className="flex justify-center items-center bg-gray-300 w-full ml-60">
      <div className="shadow-md rounded overflow-hidden w-full">
        <div className="flex justify-center items-center p-7 border-gray-300">
          <h1 className="font-bold text-green-600 text-3xl">Latest Posts</h1>
        </div>
        <div className="flex justify-end pr-7">
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="rounded-full border-2 border-green-600 px-2 py-1 bg-white text-black focus:outline-none focus:ring-1 focus:ring-opacity-50"
          >
            <option value="">All Types</option>
            <option value="product">Product</option>
            <option value="event">Event</option>
            <option value="service">Service</option>
          </select>
        </div>
        <ul className="divide-gray-300 justify-between divide-y-4 px-10 py-7">
          {visiblePosts.length === 0 && (
            <div className="text-center text-gray-500 p-4">
              No posts found for this filter.
            </div>
          )}
          {visiblePosts.map((post) => (
            <li
              key={post.id}
              className="flex items-center bg-white px-3 py-2 hover:bg-emerald-500 flex-grow rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-center px-4">
                <img
                  className="w-32 h-20 mr-4 rounded border object-cover"
                  src={post.imageUrl}
                  alt={post.name}
                />
                <div>
                  <h3 className="text-lg text-black font-medium">
                    {post.name}
                  </h3>
                  <div className="flex justify-items-centerer gap-2 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="ml-2">
                      {post.type === "product" ? "Product" : post.type}
                    </span>
                    <span className="ml-2 flex items-center">
                      <IoStarHalf className="mr-1" />
                      {post.rating}
                    </span>
                  </div>
                </div>
              </div>
              <RiDeleteBinLine
                className="text-black cursor-pointer ml-auto"
                onClick={() => removePost(post.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestPost;
