// Simulated data representing posts
const postsData = [
  {
    id: 1,
    name: "Amazing Product",
    type: "product",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
    rating: 4.5,
    date: "2024-03-29",
  },
  {
    id: 2,
    name: "Exciting Event",
    type: "event",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
    rating: 4.8,
    date: "2024-04-10",
  },
  {
    id: 3,
    name: "Reliable Service",
    type: "service",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
    rating: 5.0,
    date: "2024-03-20",
  },
];

// Simulated API function to fetch posts data
export const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay with setTimeout
    setTimeout(() => {
      // Resolve with the simulated posts data
      resolve(postsData);
    }, 1000); // Simulated delay of 1 second
  });
};
