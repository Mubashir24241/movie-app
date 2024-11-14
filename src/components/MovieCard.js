// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className=" p-4 border rounded shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg transition transform hover:scale-105">
    <img
      src={movie.image || 'https://via.placeholder.com/150'}
      alt={movie.title}
      className="w-full h-48 object-cover rounded-md"
    />
    <h3 className="font-bold mt-2 text-lg dark:text-white">{movie.title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-300">{movie.type}</p>
    <Link to={`/details/${movie.id}`} className="text-blue-500 mt-2 inline-block hover:text-blue-700">
      View Details
    </Link>
  </div>
);

export default MovieCard;
