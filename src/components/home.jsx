// src/components/HomeApp.js

import React, { useState } from 'react';
import Decision from './decision';
import Question from './question';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import { questions } from './questions';

const HomeApp = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    if (option.methodology) {
      setResult(option.methodology);
    } else {
      setStep(option.nextStep);
    }
  };

  const goSmart = () => {
    navigate('/smart');
  };

  return (
    <div className="home-app">
      <h1>Árbol de decisiones para elegir metodología</h1>
      {!result ? (
        <Question
          question={questions[step].question}
          options={questions[step].options}
          onSelectOption={handleOptionSelect}
        />
      ) : (
        <Decision result={result} />
      )}
      <button onClick={goSmart}>Ir a Smart</button>
    </div>
  );
};

export default HomeApp;
