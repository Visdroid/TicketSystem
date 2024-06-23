// Import axios at the top of bugService.js
import axios from 'axios';
import axiosConfig from './axiosConfig';

export const getBugs = async () => {
    try {
        // Example: Fetch bugs from an API or database
        const response = await fetch('https://api.example.com/bugs');
        if (!response.ok) {
            throw new Error('Failed to fetch bugs');
        }
        const bugs = await response.json();
        return bugs;
    } catch (error) {
        throw new Error(`Error fetching bugs: ${error.message}`);
    }
};

export const createBug = async (bug) => {
  try {
    const response = await axios.post('/bugs', bug);
    return response.data;
  } catch (error) {
    console.error('Error creating bug', error);
    throw error;
  }
};

export const getBug = async (id) => {
  try {
    const response = await axios.get(`/bugs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bug', error);
    throw error;
  }
};

export const updateBug = async (id, bug) => {
  try {
    await axios.put(`/bugs/${id}`, bug);
  } catch (error) {
    console.error('Error updating bug', error);
    throw error;
  }
};

export const deleteBug = async (id) => {
  try {
    await axios.delete(`/bugs/${id}`);
  } catch (error) {
    console.error('Error deleting bug', error);
    throw error;
  }
};

export const resolveBug = async (id) => {
  try {
    await axios.patch(`/bugs/${id}/resolve`);
  } catch (error) {
    console.error('Error resolving bug', error);
    throw error;
  }
};