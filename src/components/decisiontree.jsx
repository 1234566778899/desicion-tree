// src/components/DecisionTree.js

import React, { useState, useEffect } from 'react';
import Question from './Question';
import Decision from './Decision';

const DecisionTree = ({ questions }) => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log(`Current step: ${step}`);
    console.log(`Current question: ${questions[step]?.question}`);
  }, [step, questions]);

  const handleOptionSelect = (option) => {
    console.log(`Option selected: ${option.label}`);
    if (option.methodology) {
      console.log(`Methodology chosen: ${option.methodology}`);
      setResult(option.methodology);
    } else if (typeof option.nextStep === 'number') {
      if (option.nextStep >= 0 && option.nextStep < questions.length) {
        console.log(`Next step: ${option.nextStep}`);
        setStep(option.nextStep);
      } else {
        console.error(`Invalid nextStep: ${option.nextStep}`);
        alert('Ha ocurrido un error en la navegación de preguntas.');
      }
    } else {
      console.error(`Invalid option format: ${option}`);
      alert('Ha ocurrido un error con la opción seleccionada.');
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
