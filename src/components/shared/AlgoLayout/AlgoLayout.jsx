import React, { useState } from 'react';

import Background from '../Background/Background';

import AlgoHead from './AlgoHead';
import AlgoOverview from './AlgoOverview';
import AlgoVisualization from './AlgoVisualization';
import AlgoExplanation from './AlgoExplanation';
import AlgoCode from './AlgoCode';

import './AlgoLayout.css';
import '../Background/Background.css';

const rndm = () => {
    return Math.round(Math.random() * 999 + 1) / 10;
};

const isIn = (array, num) => {
    let output = false;
    array.forEach((e) => {
        if (e === num) output = true;
    });
    return output;
};

const newSticks = (numberOfSticks) => {
    const sticks = [];
    for (let i = 0; i < numberOfSticks; i++) {
        let stickHeight;
        for (let j = 0; j < 1000; j++) {
            let random = rndm();
            if (!isIn(sticks, random)) {
                stickHeight = random;
                break;
            }
        }
        sticks.push(stickHeight);
    }
    return sticks;
};

/* props.data: {
    ALGOSTYPE, 
    ALGOS: [{
        name, 
        intro, 
        explanation, 
        code, 
        complexity: {
            worstTime, 
            bestTime, 
            AvgTime, 
            space
        }
            
    }],
    
} */
const AlgoLayout = ({ algosType, algos }) => {
    const [currentAlgo, setCurrentAlgo] = useState(algos[0].name);

    const [sticksAmount, setSticksAmount] = useState(50);
    const [sticks, setSticks] = useState(newSticks(sticksAmount));
    const [isRunning, setIsRunning] = useState(false);

    let currentAlgoData;
    algos.forEach((e) => (e.name === currentAlgo ? (currentAlgoData = e) : null));

    const changeAlgoHandler = (newAlgo) => {
        setCurrentAlgo(newAlgo);
        //     return;

        // switch (currentAlgo) {
        //     case 'Bubble Sort':
        //         setCurrentAlgo('Quicksort');
        //         break;

        //     case 'Quicksort':
        //         setCurrentAlgo('Merge Sort');
        //         break;

        //     case 'Merge Sort':
        //         setCurrentAlgo('Tim Sort');
        //         break;

        //     case 'Tim Sort':
        //         setCurrentAlgo('Bubble Sort');
        //         break;

        //     default:
        //         break;

        if (isRunning) {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            });
        } else {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            }, 100);
        }
    };

    return (
        <div className="wrapper">
            <Background />
            <div className="algo-layout-container">
                <AlgoHead changeAlgoHandler={changeAlgoHandler} currentAlgo={currentAlgo} algos={algos} />
                <AlgoOverview intro={currentAlgoData.intro} complexity={currentAlgoData.complexity} />
                <AlgoVisualization
                    algosType={algosType}
                    currentAlgo={currentAlgo}
                    sticksAmount={sticksAmount}
                    setSticksAmount={setSticksAmount}
                    sticks={sticks}
                    setSticks={setSticks}
                    isRunning={isRunning}
                    setIsRunning={setIsRunning}
                    newSticks={newSticks}
                />
                <AlgoExplanation explanation={currentAlgoData.explanation} />
                <AlgoCode code={currentAlgoData.code} />
                <hr style={{ backgroundColor: 'white', marginTop: '30px' }} />
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h3>Copyright {new Date(Date.now()).getFullYear()} Timo Diehm</h3>
                </div>
            </div>
        </div>
    );
};

export default AlgoLayout;
