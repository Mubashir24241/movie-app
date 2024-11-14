// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMailto = (event) => {
    event.preventDefault();
    
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
  
    window.location.href = `mailto:mbshrmr@gmail.com?subject=${subject}&body=${body}`;
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleMailto}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
