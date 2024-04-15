import React, { useState, useEffect } from "react";
import LatestPost from "../components/LatestPost";
import { fetchPosts } from "../components/PostsData";
import Orders from "../components/Orders";
import OrderDetails from "../components/Orderdetails";

function Seller() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <Orders />
      <OrderDetails />
      <div className="container mx-auto px-4 py-8">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <LatestPost posts={posts} />
        )}
      </div>
    </div>
  );
}

export default Seller;
