import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name,description})
      };
  
      fetch('http://localhost:8080/api/v1/training-sessions/admin/create', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        navigate('/formation')
        

    
    


    console.log({ name, description }); // afficher les données dans la console
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
      </div>
      <div>
        <label htmlFor="description">Description :</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} required></textarea>
      </div>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default Form;
