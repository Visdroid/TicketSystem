// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BugList from './components/BugList';
import CreateBug from './components/CreateBug';
import BugDetail from './components/BugDetail';
import Home from './components/Home';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bugs">Bug List</Link>
            </li>
            <li>
              <Link to="/create-bug">Create Bug</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/bugs/:id" element={<BugDetail />} />
          <Route path="/bugs" element={<BugList />} />
          <Route path="/create-bug" element={<CreateBug />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;