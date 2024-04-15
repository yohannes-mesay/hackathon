import React, { useState } from 'react';

const PostForm = () => {
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [postType, setPostType] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted:', { name, description, postType, price, category, date, location, images });
    
    setName('');
    setDescription('');
    setPostType('');
    setPrice(0);
    setCategory('');
    setDate('');
    setLocation('');
    setImages([]);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h4 className="text-3xl font-bold mb-6 text-center text-blue-500">Create a New Post</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <textarea id="description" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        
        <div>
          <label htmlFor="postType" className="block text-gray-700">Post Type:</label>
          <select id="postType" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={postType} onChange={(e) => setPostType(e.target.value)} required>
            <option value="">Select Post Type</option>
            <option value="product">Product</option>
            <option value="event">Event</option>
            <option value="service">Service</option>
          </select>
        </div>
       
        {postType === 'product' && (
          <>
          
            <div>
              <label htmlFor="price" className="block text-gray-700">Price:</label>
              <input type="number" id="price" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" min="0" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required />
            </div>
           
            <div>
              <label htmlFor="category" className="block text-gray-700">Category:</label>
              <select id="category" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={category} onChange={(e) => setCategory(e.target.value)} required>

                <option value="electronics">Electronics</option>
                <option value="clothes">Clothes</option>
                <option value="shoes">Shoes</option>
                
              </select>
            </div>
          </>
        )}
        {postType === 'event' && (
          <>
          
            <div>
              <label htmlFor="date" className="block text-gray-700">Date:</label>
              <input type="date" id="date" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
           
            <div>
              <label htmlFor="location" className="block text-gray-700">Location:</label>
              <input type="text" id="location" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
          </>
        )}
       
        <div>
          <label htmlFor="images" className="block text-gray-700">Upload Images:</label>
          <input type="file" id="images" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" accept="image/*" multiple onChange={handleImageUpload} />
          <div className="mt-2 flex space-x-4">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
            ))}
          </div>
        </div>
       
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400" onClick={() => {
            
            setName('');
            setDescription('');
            setPostType('');
            setPrice(0);
            setCategory('');
            setDate('');
            setLocation('');
            setImages([]);
          }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
