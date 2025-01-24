import React, { useState } from 'react';

const INITIAL_ITEMS = [
      'Apple', 'Banana', 'Cherry', 'Date',
      'Elderberry', 'Fig', 'Grape'
];

const SearchableList = () => {
      const [searchTerm, setSearchTerm] = useState('');

      const filteredItems = INITIAL_ITEMS.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
            <div className="space-y-4">
                  <input
                        type="text"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ul>
                        {filteredItems.map(item => (
                              <li key={item} className="p-2 border-b">
                                    {item}
                              </li>
                        ))}
                  </ul>
            </div>
      );
};

export default SearchableList;
