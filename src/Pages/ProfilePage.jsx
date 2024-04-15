import React, { useState } from 'react';

const ProfilePage = () => {
  
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [bio, setBio] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', { name, phoneNumber, email, profileImage, bio });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      
      <div className="flex justify-center items-center flex-col">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="rounded-full w-40 h-40 object-cover mb-4" />
        ) : (
          <div className="flex items-center justify-center w-40 h-40 bg-gray-200 rounded-full mb-4">
            <img src="/assets/Images/profile_icon.jpg" alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          </div>
        )}
        {!profileImage && (
          <div>
            <label htmlFor="profileImage" className="block text-center text-gray-700 cursor-pointer">Upload Profile Image</label>
            <input type="file" id="profileImage" className="hidden" accept="image/*" onChange={handleImageUpload} />
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
          <input type="tel" id="phoneNumber" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="bio" className="block text-gray-700">Bio:</label>
          <textarea id="bio" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" placeholder="Write something about yourself..." rows="3" value={bio} onChange={(e) => setBio(e.target.value)} required />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
