import React, { useState } from 'react';

const PlantCard = ({ plant, onDelete, onPriceUpdate, onMarkSoldOut }) => {
  const [newPrice, setNewPrice] = useState(plant.price);

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} width="100" />
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>

      {/* Update Price */}
      <input
        type="number"
        value={newPrice}
        onChange={handlePriceChange}
        placeholder="New Price"
      />
      <button onClick={() => onPriceUpdate(plant.id, newPrice)}>
        Update Price
      </button>

      {/* Mark Sold Out */}
      <button onClick={() => onMarkSoldOut(plant.id)}>
        {plant.soldOut ? 'Sold Out' : 'Mark as Sold Out'}
      </button>

      {/* Delete */}
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </div>
  );
};

export default PlantCard;
