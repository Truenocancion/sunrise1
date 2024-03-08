import React from 'react';
import FlatItem from './FlatItem';

const flats = [1, 2, 3, 4, 5]; // Example flat IDs

const FlatsList: React.FC = () => {
  return (
    <div>
      <h2>Flats</h2>
      {flats.map((flatId) => (
        <FlatItem key={flatId} id={flatId} />
      ))}
    </div>
  );
};

export default FlatsList;
