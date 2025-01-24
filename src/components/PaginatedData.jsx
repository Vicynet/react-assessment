import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginatedData = () => {
      const [users, setUsers] = useState([]);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            const fetchUsers = async () => {
                  setLoading(true);
                  try {
                        const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`);
                        setUsers(response.data);
                  } catch (error) {
                        console.error('Error fetching data:', error);
                  }
                  setLoading(false);
            };

            fetchUsers();
      }, [page]);

      return (
            <div className="space-y-4">
                  {loading ? (
                        <p>Loading...</p>
                  ) : (
                        users.map(user => (
                              <div key={user.id} className="p-4 border rounded">
                                    <h3>{user.name}</h3>
                                    <p>{user.email}</p>
                              </div>
                        ))
                  )}
                  <div className="flex justify-between">
                        <button
                              onClick={() => setPage(prev => Math.max(1, prev - 1))}
                              disabled={page === 1}
                              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
                        >
                              Previous
                        </button>
                        <button
                              onClick={() => setPage(prev => prev + 1)}
                              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                              Next
                        </button>
                  </div>
            </div>
      );
};

export default PaginatedData;
