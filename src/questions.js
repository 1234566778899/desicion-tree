// src/questions.js

export const questions = [
    {
        question: '¿Cuál es el tamaño del proyecto?',
        options: [
            { label: 'Pequeño', nextStep: 1 },
            { label: 'Mediano', nextStep: 2 },
            { label: 'Grande', nextStep: 3 },
        ],
    },
    {
        question: '¿Los requisitos son claros y estables?',
        options: [
            { label: 'Sí', nextStep: 4 },
            { label: 'No', nextStep: 5 },
        ],
    },
    {
        question: '¿El proyecto tiene alta complejidad técnica?',
        options: [
            { label: 'Sí', nextStep: 6 },
            { label: 'No', nextStep: 7 },
        ],
    },
    {
        question: '¿El proyecto tiene requisitos cambiantes?',
        options: [
            { label: 'Sí', nextStep: 8 },
            { label: 'No', nextStep: 9 },
        ],
    },
    {
        question: '¿Es crítico entregar toda la funcionalidad de una sola vez?',
        options: [
            { label: 'Sí', methodology: 'Waterfall' },
            { label: 'No', nextStep: 10 },
        ],
    },
    {
        question: '¿Es necesario desarrollar prototipos rápidamente?',
        options: [
            { label: 'Sí', methodology: 'Prototyping' },
            { label: 'No', nextStep: 11 },
        ],
    },
    {
        question: '¿Requiere un análisis continuo de riesgos?',
        options: [
            { label: 'Sí', methodology: 'Spiral' },
            { label: 'No', nextStep: 12 },
        ],
    },
    {
        question: '¿El cliente está dispuesto a participar activamente?',
        options: [
            { label: 'Sí', nextStep: 13 },
            { label: 'No', methodology: 'Iterative and Incremental' },
        ],
    },
    {
        question: '¿Se necesita un ciclo rápido de entregas con feedback constante?',
        options: [
            { label: 'Sí', methodology: 'Scrum' },
            { label: 'No', nextStep: 14 },
        ],
    },
    {
        question: '¿Es necesario seguir un enfoque detallado con mucha documentación?',
        options: [
            { label: 'Sí', methodology: 'V-Model' },
            { label: 'No', methodology: 'Rational Unified Process (RUP)' },
        ],
    },
    {
        question: '¿Se necesita un ciclo rápido de desarrollo con entregas frecuentes?',
        options: [
            { label: 'Sí', methodology: 'Extreme Programming (XP)' },
            { label: 'No', methodology: 'Lean Software Development' },
        ],
    },
    {
        question: '¿Es importante minimizar los defectos desde el principio?',
        options: [
            { label: 'Sí', methodology: 'Cleanroom' },
            { label: 'No', nextStep: 15 },
        ],
    },
    {
        question: '¿Es necesario tener feedback constante del cliente?',
        options: [
            { label: 'Sí', methodology: 'Scrum' },
            { label: 'No', methodology: 'Spiral' },
        ],
    },
    {
        question: '¿El equipo de desarrollo tiene experiencia en enfoques ágiles?',
        options: [
            { label: 'Sí', methodology: 'Scrum' },
            { label: 'No', methodology: 'Waterfall' },
        ],
    },
    {
        question: '¿El proyecto involucra varias fases de desarrollo simultáneo?',
        options: [
            { label: 'Sí', methodology: 'Rational Unified Process (RUP)' },
            { label: 'No', methodology: 'Waterfall' },
        ],
    },
    {
        question: '¿Se desea iterar en pequeñas partes del software con pruebas continuas?',
        options: [
            { label: 'Sí', methodology: 'Test-Driven Development (TDD)' },
            { label: 'No', methodology: 'Feature-Driven Development (FDD)' },
        ],
    },
    {
        question: '¿El proyecto tiene alta dependencia de la tecnología más reciente?',
        options: [
            { label: 'Sí', methodology: 'Lean Software Development' },
            { label: 'No', methodology: 'Waterfall' },
        ],
    },
    {
        question: '¿El proyecto depende de equipos distribuidos globalmente?',
        options: [
            { label: 'Sí', methodology: 'Open Source Software Development' },
            { label: 'No', methodology: 'Microsoft Solutions Framework' },
        ],
    },
];
