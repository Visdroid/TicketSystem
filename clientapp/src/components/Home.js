// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const API_URL = 'https://localhost:7061/api/Bug'; // Replace with your actual backend URL

const Home = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get(API_URL);
        setBugs(response.data);
      } catch (error) {
        console.error('There was an error fetching the bugs!', error);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div className="home">
      <h2>Welcome to Bug Tracker!</h2>
      <h3>Bug List</h3>
      <table className="bug-table">
        <thead>
          <tr>
            <th>Summary</th>
            <th>Description</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <tr key={bug.id}>
              <td>
                <Link to={`/bugs/${bug.id}`}>{bug.summary}</Link>
              </td>
              <td>{bug.description}</td>
              <td>{bug.createdBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;