// src/pages/MovieList.js
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/api';
import MovieCard from '../components/MovieCard';
import Shimmer from '../components/Shimmer';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then((response) => {
        setMovies(response.data);
        setFilteredMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );
    setFilteredMovies(results);
  };

  const handleSort = () => {
    const sorted = [...filteredMovies].sort((a, b) =>
      sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setFilteredMovies(sorted);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Movie List</h1>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full"
        />
        <button onClick={handleSort} className="bg-blue-500 text-white p-2 rounded">
          Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
        </button>
      </div>

      {loading ? (
        // Show shimmer effect placeholders while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : (
        // Show movie cards after loading
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
