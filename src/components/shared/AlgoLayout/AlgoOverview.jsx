import React, { useState } from 'react';

import './AlgoOverview.css';

const AlgoOverview = ({ intro, complexity }) => {
    const [showComplexity, setShowComplexity] = useState(false);

    const mouseOverHandler = () => {
        setShowComplexity(true);
    };

    const mouseDownHandler = () => {
        setShowComplexity(false);
    };
    return (
        <div className="algo-overview">
            <div className="intro-container">
                <p>{intro}</p>
            </div>
            <div onMouseOver={mouseOverHandler} onMouseLeave={mouseDownHandler} className="complexity-container">
                {!showComplexity && <h3>Time & Space Complexity</h3>}
                {showComplexity && (
                    <div className="complexity-box">
                        <h4>Worst Case Time Complexity: {complexity.worstTime}</h4>
                        <h4>Best Case Time Complexity: {complexity.bestTime}</h4>
                        <h4>Average Case Time Complexity: {complexity.avgTime}</h4>
                        <h4>Space Complexity: {complexity.space}</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlgoOverview;
