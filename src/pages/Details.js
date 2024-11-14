// src/pages/Details.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, addToList } from '../api/api';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  const handleAddToList = (status) => {
    addToList(movie.id, status).then(() => {
      alert(`${movie.title} added to ${status} list.`);
    });
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
      <p className="text-gray-500 mb-4">{movie.type}</p>
      <p>{movie.description}</p>
      <div className="mt-4 space-x-2">
        <button onClick={() => handleAddToList('To Watch')} className="bg-blue-500 text-white p-2 rounded">
          To Watch
        </button>
        <button onClick={() => handleAddToList('Watched')} className="bg-green-500 text-white p-2 rounded">
          Watched
        </button>
      </div>
    </div>
  );
};

export default Details;
