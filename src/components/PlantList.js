import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ plants, onDelete, onPriceUpdate, onMarkSoldOut }) => {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
          onPriceUpdate={onPriceUpdate}
          onMarkSoldOut={onMarkSoldOut}
        />
      ))}
    </div>
  );
};

export default PlantList;
