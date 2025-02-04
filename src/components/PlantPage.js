import React, { useState, useEffect } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

const PlantPage = () => {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch plants from the backend
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new plant
  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(addedPlant => {
        setPlants([...plants, addedPlant]);
      })
      .catch(err => console.error(err));
  };

  // Handle updating a plant's price
  const handlePriceUpdate = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then(response => response.json())
      .then(updatedPlant => {
        setPlants(plants.map(plant =>
          plant.id === id ? updatedPlant : plant
        ));
      })
      .catch(err => console.error(err));
  };

  // Handle deleting a plant
  const handleDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setPlants(plants.filter(plant => plant.id !== id));
      })
      .catch(err => console.error(err));
  };

  // Mark plant as sold out
  const handleMarkSoldOut = (id) => {
    setPlants(plants.map(plant =>
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    ));
  };

  return (
    <div className="plant-page">
      <Search searchTerm={searchTerm} onSearchChange={handleSearch} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList
        plants={filteredPlants}
        onDelete={handleDelete}
        onPriceUpdate={handlePriceUpdate}
        onMarkSoldOut={handleMarkSoldOut}
      />
    </div>
  );
};

export default PlantPage;
