import React from 'react';

import './AlgoCode.css';

const AlgoCode = ({ code }) => {
    return (
        <div>
            <div className="code-container">
                <h2>Code</h2>
                <img src={process.env.PUBLIC_URL + `/${code}`} alt="algorithm-code" />
            </div>
        </div>
    );
};

export default AlgoCode;
