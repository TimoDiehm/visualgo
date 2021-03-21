const bubbleSort = async (exit, array, stickWidth, speed, addColor, sleep, moveStickTo, removeColor) => {
    // BUBBLE SORT
    let finished = false;
    for (let i = 0; i < array.length - 1; i++) {
        //////// maybe implement while loop to pause and save i.
        finished = true;
        if (exit) break;
        for (let j = 0; j < array.length - 1; j++) {
            exit = !exit ? addColor(`stick-${j}`) : null;
            exit = !exit ? addColor(`stick-${j + 1}`) : null;

            // sleeping time represents the comparison
            await sleep(500 / speed);
            if (array[j] > array[j + 1]) {
                finished = false;
                // swap visually
                moveStickTo(`.stick-${j}`, 2 * stickWidth * (j + 1));
                moveStickTo(`.stick-${j + 1}`, 2 * stickWidth * j);
                await sleep(1001 / speed);

                // swap in code
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                // swap classes
                try {
                    let oldJ = document.getElementsByClassName(`stick-${j}`)[0];
                    document.getElementsByClassName(`stick-${j + 1}`)[0].className = `stick-${j}`;
                    oldJ.className = `stick-${j + 1}`;
                } catch (err) {
                    exit = true;
                }
            }
            exit = !exit ? removeColor(`stick-${j}`) : null;
            exit = !exit ? removeColor(`stick-${j + 1}`) : null;
            if (exit) break;
        }
        if (finished) return;
    }
};

export default bubbleSort;

// const bubbleSort = (array) => {
//     let finished = false;
//     for (let i = 0; i < array.length - 1; i++) {
//         finished = true;
//         for (let j = 0; j < array.length - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 finished = false
//             }

//         }
//         if (finished) return;
//     }
// };

// bubbleSort();
