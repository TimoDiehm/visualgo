import React, { useState } from 'react';

import './AlgoHead.css';

const AlgoHead = ({ currentAlgo, algos, changeAlgoHandler }) => {
    const [showSelection, setShowSelection] = useState(false);

    const onSelectHandler = (e) => {
        changeAlgoHandler(e.target.className);
        setShowSelection(false);
    };

    return (
        <div className="algo-head-container">
            <div onMouseEnter={() => setShowSelection(true)} onMouseLeave={() => setShowSelection(false)}>
                <h1>
                    {`${currentAlgo} `}
                    <img className="dropdown-arrow" src={process.env.PUBLIC_URL + '/dropdownArrow.png'} alt="" />
                </h1>
                {showSelection && (
                    <div className="algo-selection">
                        {algos.map((a) => {
                            return (
                                <h2 onClick={onSelectHandler} className={a.name} key={a.name}>
                                    {`${a.name} (${a.difficulty})`}
                                </h2>
                            );
                        })}
                    </div>
                )}
            </div>
            <h3>Home</h3>
        </div>
    );
};

export default AlgoHead;
