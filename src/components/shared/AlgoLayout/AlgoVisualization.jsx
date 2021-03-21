import React from 'react';

import SortingVisualization from '../../algos-sorting/SortingVisualization';
import PathfindingVisualization from '../../algos-pathfinding/PathfindingVisualization';
import SudokuVisualization from '../../algos-sudoku/SudokuVisualization';

const AlgoVisualization = ({
    algosType,
    currentAlgo,
    sticksAmount,
    setSticksAmount,
    sticks,
    setSticks,
    isRunning,
    setIsRunning,
    newSticks,
}) => {
    if (algosType === 'sorting')
        return (
            <SortingVisualization
                algo={currentAlgo}
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
        );
    if (algosType === 'pathfinding') return <PathfindingVisualization algo={currentAlgo} />;
    if (algosType === 'sudoku') return <SudokuVisualization algo={currentAlgo} />;
};

export default AlgoVisualization;
