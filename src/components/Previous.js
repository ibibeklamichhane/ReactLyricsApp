import React from 'react';

const PreviousSearches = ({ previousSearches }) => {
  return (
<div className="mt-4">
  <h2 className="text-lg font-semibold mb-2">Previous Searches:</h2>
  <ul className="list-disc pl-6">
    {previousSearches.map((prevSearch, index) => (
      <li key={index} className="text-gray-700 mb-1">
        {prevSearch}
      </li>
    ))}
  </ul>
</div>
  );
};

export default PreviousSearches;
