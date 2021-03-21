import React, { useState } from 'react';
import { anime } from 'react-anime';

import bubbleSort from '../../algo-data/sorting/bubbleSort';
import quickSort from '../../algo-data/sorting/quickSort';
import mergeSort from '../../algo-data/sorting/mergeSort';
import timSort from '../../algo-data/sorting/timSort';

import './SortingVisualization.css';

const sleep = (milliseconds) => {
    if (milliseconds <= 1) return;
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const SortingVisualization = ({
    algo,
    sticksAmount,
    setSticksAmount,
    sticks,
    setSticks,
    isRunning,
    setIsRunning,
    newSticks,
}) => {
    const [speed, setSpeed] = useState(100);

    const sectionWidth = 1200;
    const stickWidth = sectionWidth / (sticks.length * 2 - 1);

    const moveStickTo = async (stick, move) => {
        anime({
            targets: `${stick}`,
            left: `${move}`,
            easing: 'linear',
            duration: 1001 / speed,
        });
        // document.getElementsByClassName(`stick-${stick}`)[0].style.left = `${move}px`;
    };

    const speedChangeHandler = (e) => {
        if (isRunning) {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            }, 2000 / speed);
        } else {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            }, 100);
        }
        setSpeed(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setSticksAmount(e.target.value);
        if (isRunning) {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(e.target.value));
            }, 2000 / speed);
        } else {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(e.target.value));
            }, 100);
        }
    };

    const spawnButtonHandler = () => {
        if (isRunning) {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            }, 2000 / speed);
        } else {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(sticksAmount));
            }, 100);
        }
    };

    const presetButtonHandler = (speed, amount) => {
        setSticksAmount(amount);
        if (isRunning) {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(amount));
            }, 2000 / speed);
        } else {
            setIsRunning(false);
            setSticks(false);
            setTimeout(() => {
                setSticks(newSticks(amount));
            }, 100);
        }
        setSpeed(speed);
    };

    const addColor = (ElementClassName, addClassName = 'grey') => {
        try {
            document.getElementsByClassName(ElementClassName)[0].classList.add(addClassName);
        } catch (err) {
            console.log(err);
            return true;
        }
        return false;
    };

    const removeColor = (ElementClassName, addClassName = 'grey') => {
        try {
            document.getElementsByClassName(ElementClassName)[0].classList.remove(addClassName);
        } catch (err) {
            console.log(err);
            return true;
        }
        return false;
    };

    const startButtonHandler = async () => {
        if (isRunning) console.log('yes');
        let exit = false;
        setIsRunning(true);

        switch (algo) {
            case 'Bubble Sort':
                bubbleSort(exit, sticks, stickWidth, speed, addColor, sleep, moveStickTo, removeColor);
                break;

            case 'Quicksort':
                quickSort(sticks, sticks.length - 1, stickWidth, speed, addColor, sleep, moveStickTo);
                break;

            case 'Merge Sort':
                mergeSort(sticks, stickWidth, speed, addColor, sleep, removeColor, moveStickTo);
                break;

            case 'Tim Sort':
                timSort(sticks, stickWidth, speed, addColor, sleep, removeColor, moveStickTo);
                break;

            default:
                bubbleSort(exit, sticks, stickWidth, speed, addColor, sleep, moveStickTo, removeColor);
                break;
        }
    };

    return (
        <div className="sorting-container">
            <div className="sticks-container">
                {sticks &&
                    sticks.map((l, index) => (
                        <div
                            key={index}
                            className={`stick-${index}`}
                            id={`stick-${l}`}
                            style={{
                                height: `${l}%`,
                                width: `${stickWidth}px`,
                                left: `${index * stickWidth * 2}px`,
                            }}
                        ></div>
                    ))}
            </div>
            <div className="settings">
                <div className="settings-left">
                    <svg
                        onClick={startButtonHandler}
                        className="start-btn"
                        viewBox="0 0 70 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M67.5001 35.67C70.8334 37.5945 70.8334 42.4057 67.5001 44.3302L7.50005 78.9712C4.16672 80.8957 5.34058e-05 78.4901 5.34058e-05 74.6411L5.34058e-05 5.35909C5.34058e-05 1.51008 4.16672 -0.895545 7.50005 1.02896L67.5001 35.67Z"
                            fill="white"
                            stroke="white"
                        />
                    </svg>
                    <img
                        onClick={spawnButtonHandler}
                        className="spawn-btn"
                        src={process.env.PUBLIC_URL + '/reload.png'}
                        alt="reload"
                    />
                </div>
                <div className="settings-right">
                    <div className="presets">
                        <h3>Presets</h3>
                        <button onClick={() => presetButtonHandler(1, 20)}>VERY SLOW</button>
                        <br />
                        <button onClick={() => presetButtonHandler(100, 50)}>SLOW</button>
                        <br />
                        <button onClick={() => presetButtonHandler(1000, 200)}>FAST</button>
                    </div>
                    <div className="custom">
                        <h3>Custom</h3>
                        <label htmlFor="speed">{`Speed: ${speed}`}</label>
                        <br />
                        <input
                            name="speed"
                            onChange={speedChangeHandler}
                            min={1}
                            max={1000}
                            value={speed}
                            type="range"
                        />
                        <br />
                        <label htmlFor="amount">{`Amount: ${sticksAmount}`}</label>
                        <br />
                        <input
                            name="amount"
                            onChange={amountChangeHandler}
                            min={5}
                            max={200}
                            value={sticksAmount}
                            type="range"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortingVisualization;
