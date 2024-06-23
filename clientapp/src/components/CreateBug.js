import React, { useState } from 'react';
import { createBug } from '../services/bugService'; // Adjust the path based on your actual directory structure
import './CreateBug.css';

const CreateBug = () => {
  const [bug, setBug] = useState({
    summary: '',
    description: '',
    createdBy: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBug({
      ...bug,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBug = await createBug(bug);
      console.log('Bug created successfully', newBug);
      setSuccessMessage('Bug created successfully!');
      setErrorMessage('');
      setBug({
        summary: '',
        description: '',
        createdBy: ''
      });
    } catch (error) {
        console.error('There was an error creating the bug!', error.response || error.message);
        setErrorMessage('Failed to create bug. Please try again.');
        setSuccessMessage('');
    }
  };

  return (
    <div className="create-bug">
      <h2>Create Bug</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Summary</label>
          <input type="text" name="summary" value={bug.summary} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={bug.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Created By</label>
          <input type="text" name="createdBy" value={bug.createdBy} onChange={handleChange} required />
        </div>
        <button type="submit">Create Bug</button>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default CreateBug;