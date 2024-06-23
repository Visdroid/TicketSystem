// src/components/BugDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BugDetail.css';

const API_URL = 'https://localhost:7061/api/Bug'; // Replace with your actual backend URL

function BugDetail() {
  const { id } = useParams();
  const [bug, setBug] = useState(null);

  useEffect(() => {
    const fetchBug = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setBug(response.data);
      } catch (error) {
        console.error('There was an error fetching the bug details!', error);
      }
    };

    fetchBug();
  }, [id]);

  if (!bug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bug-detail">
      <h2>{bug.summary}</h2>
      <p>{bug.description}</p>
      <p>Created By: {bug.createdBy}</p>
      <p>Status: {bug.isResolved ? 'Resolved' : 'Unresolved'}</p>
    </div>
  );
}

export default BugDetail;