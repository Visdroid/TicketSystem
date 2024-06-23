import axios from 'axios';
import config from '../config';


const API_URL = config.apiUrl; // Adjust the URL based on your backend configuration

const getBugs = async () => {
  return await axios.get(API_URL);
};

const getBugById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

const createBug = async (bug) => {
  return await axios.post(API_URL, bug);
};

const updateBug = async (id, bug) => {
  return await axios.put(`${API_URL}/${id}`, bug);
};

const deleteBug = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

const resolveBug = async (id) => {
  return await axios.patch(`${API_URL}/${id}/resolve`);
};

export { getBugs, getBugById, createBug, updateBug, deleteBug, resolveBug };