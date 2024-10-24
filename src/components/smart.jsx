// src/components/Smart.js

import React from 'react';
import '../styles/Smart.css'; // Asegúrate de que el nombre coincide
import DecisionTree from './DecisionTree';
import {
  analysisQuestions,
  designQuestions,
  implementationQuestions,
  verificationQuestions,
  maintenanceQuestions,
} from '../questionsSections'; // Importa todas las preguntas

const Smart = () => {
  const sections = [
    { name: 'ANÁLISIS', color: '#A4C8E1', questions: analysisQuestions },
    { name: 'DISEÑO', color: '#7FA1C7', questions: designQuestions },
    { name: 'IMPLEMENTACIÓN', color: '#4B8BD6', questions: implementationQuestions },
    { name: 'VERIFICACIÓN', color: '#007BFF', questions: verificationQuestions },
    { name: 'MANTENIMIENTO', color: '#0056B3', questions: maintenanceQuestions },
  ];

  return (
    <div className="smart-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className="section"
          style={{ backgroundColor: section.color }}
        >
          <div className="section-name">{section.name}</div>
          <div className="decision-tree-container">
            <DecisionTree questions={section.questions} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Smart;
