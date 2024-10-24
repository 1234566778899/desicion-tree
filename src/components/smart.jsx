// src/components/Smart.js

import React from 'react';
import '../styles/smart.css';
import DecisionTree from './decisiontree';

export const Smart = () => {
  const sections = [
    { name: 'ANÁLISIS', color: '#A4C8E1' },
    { name: 'DISEÑO', color: '#7FA1C7' },
    { name: 'IMPLEMENTACIÓN', color: '#4B8BD6' },
    { name: 'VERIFICACIÓN', color: '#007BFF' },
    { name: 'MANTENIMIENTO', color: '#0056B3' },
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
            <DecisionTree />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Smart;
