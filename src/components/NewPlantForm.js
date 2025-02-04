import React, { useState } from 'react';

const NewPlantForm = ({ onAddPlant }) => {
  const [newPlant, setNewPlant] = useState({ name: '', image: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlant.name && newPlant.image && newPlant.price) {
      onAddPlant(newPlant);
      setNewPlant({ name: '', image: '', price: '' }); // reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant Name"
        value={newPlant.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newPlant.image}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={newPlant.price}
        onChange={handleInputChange}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
};

export default NewPlantForm;
