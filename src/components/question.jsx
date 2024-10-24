// src/components/Question.js

import React from 'react';

const Question = ({ question, options, onSelectOption }) => {
  return (
    <div className="question-container">
      <h3>{question}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <button key={index} onClick={() => onSelectOption(option)}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
