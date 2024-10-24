// src/questionsSections.js

export const analysisQuestions = [
    {
        question: '¿El proyecto requiere un análisis detallado de requisitos?',
        options: [
            { label: 'Sí', nextStep: 1 },
            { label: 'Parcialmente', nextStep: 2 },
            { label: 'No', methodology: 'Requirements Analysis' },
        ],
    },
    {
        question: '¿Se necesita un análisis de viabilidad técnico?',
        options: [
            { label: 'Alta Viabilidad', methodology: 'Feasibility Study' },
            { label: 'Media Viabilidad', methodology: 'Basic Analysis' },
            { label: 'Baja Viabilidad', methodology: 'Reevaluation Required' },
        ],
    },
];

export const designQuestions = [
    {
        question: '¿El diseño debe ser altamente escalable?',
        options: [
            { label: 'Sí', methodology: 'Scalable Design' },
            { label: 'Moderadamente', nextStep: 1 },
            { label: 'No', methodology: 'Monolithic Design' },
        ],
    },
    {
        question: '¿Se requiere un diseño modular?',
        options: [
            { label: 'Totalmente Modular', methodology: 'Modular Design' },
            { label: 'Parcialmente Modular', nextStep: 2 },
            { label: 'No Modular', methodology: 'Monolithic Design' },
        ],
    },
];

export const implementationQuestions = [
    {
        question: '¿Se utilizará una metodología ágil para la implementación?',
        options: [
            { label: 'Sí', methodology: 'Agile Implementation' },
            { label: 'Sí Parcialmente', nextStep: 1 },
            { label: 'No', methodology: 'Traditional Implementation' },
        ],
    },
    {
        question: '¿El equipo está familiarizado con DevOps?',
        options: [
            { label: 'Sí', methodology: 'DevOps Implementation' },
            { label: 'No', methodology: 'Standard Implementation' },
            { label: 'En Proceso de Aprendizaje', methodology: 'Incremental DevOps Implementation' },
        ],
    },
];

export const verificationQuestions = [
    {
        question: '¿Se realizarán pruebas automatizadas?',
        options: [
            { label: 'Sí', methodology: 'Automated Testing' },
            { label: 'No', nextStep: 1 },
            { label: 'Solo Pruebas Manuales', methodology: 'Manual Testing' },
        ],
    },
    {
        question: '¿El proceso de verificación es crítico para el éxito del proyecto?',
        options: [
            { label: 'Sí', methodology: 'Rigorous Verification' },
            { label: 'No', methodology: 'Basic Verification' },
            { label: 'Dependiendo del Módulo', methodology: 'Module-Based Verification' },
        ],
    },
];

export const maintenanceQuestions = [
    {
        question: '¿Se prevé una alta frecuencia de actualizaciones?',
        options: [
            { label: 'Sí', methodology: 'Continuous Maintenance' },
            { label: 'No', nextStep: 1 },
            { label: 'Depende de los Clientes', methodology: 'Client-Driven Maintenance' },
        ],
    },
    {
        question: '¿El mantenimiento requiere soporte 24/7?',
        options: [
            { label: 'Sí', methodology: '24/7 Support Maintenance' },
            { label: 'No', methodology: 'Standard Maintenance' },
            { label: 'Soporte Durante Horas Pico', methodology: 'Peak Hours Maintenance' },
        ],
    },
];
