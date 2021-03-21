import React from 'react';

import './AlgoExplanation.css';

const AlgoExplanation = ({ explanation }) => {
    return (
        <div className="explanation-container">
            <h2>Explanation</h2>
            <p>{explanation}</p>
        </div>
    );
};

export default AlgoExplanation;
