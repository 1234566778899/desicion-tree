import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeApp from './components/HomeApp';
import Smart from './components/Smart';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeApp />} />
      <Route path="/smart" element={<Smart />} />
    </Routes>

  );
}

export default App;
