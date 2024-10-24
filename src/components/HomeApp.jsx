// src/components/HomeApp.js

import React from 'react';
import DecisionTree from './DecisionTree';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { questions } from '../questions'; // Importa las preguntas principales

const HomeApp = () => {
  const navigate = useNavigate();

  const goSmart = () => {
    navigate('/smart');
  };

  return (
    <div className="home-app">
      <h1>Árbol de decisiones para elegir metodología</h1>
      <DecisionTree questions={questions} /> {/* Pasa las preguntas principales */}
      <button onClick={goSmart}>Ir a Smart</button>
    </div>
  );
};

export default HomeApp;
