// src/components/DecisionTree.js

import React, { useState } from 'react';
import Question from './question';
import Decision from './decision';
import { questions } from './questions';

const DecisionTree = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState('');

  const handleOptionSelect = (option) => {
    if (option.methodology) {
      setResult(option.methodology);
    } else {
      setStep(option.nextStep);
    }
  };

  return (
    <div>
      {result ? (
        <Decision result={result} />
      ) : (
        <Question
          question={questions[step].question}
          options={questions[step].options}
          onSelectOption={handleOptionSelect}
        />
      )}
    </div>
  );
};

export default DecisionTree;
