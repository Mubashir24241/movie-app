import React, { useEffect, useState } from 'react';
import { fetchMyList } from '../api/api'; // Ensure this path matches where your API functions are located
import { Link } from 'react-router-dom';

const MyList = () => {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyList()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMyList(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching the list:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  

  if (loading) return <p className="text-center text-gray-500 pt-20 mt-12">Loading Please wait...</p>;

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-4 pt-6">My List</h2>
      <div className="space-y-4">
        {myList.length > 0 ? (
          myList.map((movie) => (
            <div key={movie.id} className="border p-4 rounded shadow-md">
              <h3 className="font-bold">{movie.title}</h3>
              <p className="text-sm">{movie.status}</p>
            </div>
          ))
        ) : (
          <div className="pt-10 mt-10 text-center">
            <span className="text-red-800 font-bold">Oops!!</span><br />
            <p className="text-gray-500 mt-2">No items in your list, please add some movies.</p>
            <Link
              to="/movies"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transform hover:scale-105"
            >
              Go to Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyList;
