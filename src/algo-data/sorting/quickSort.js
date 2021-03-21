const quickSort = async (array, high, stickWidth, speed, addColor, sleep, moveStickTo) => {
    const partition = async (array, low, high) => {
        let i = low - 1;
        let pivot = array[high];
        if (addColor(`stick-${high}`, 'red')) return;
        for (let j = low; j < high; j++) {
            if (array[j] <= pivot) {
                i++;
                // swap visually
                moveStickTo(`.stick-${j}`, 2 * stickWidth * i);
                moveStickTo(`.stick-${i}`, 2 * stickWidth * j);
                await sleep(1001 / speed);

                // swap in code
                [array[j], array[i]] = [array[i], array[j]];

                // swap classes
                try {
                    let oldJ = document.getElementsByClassName(`stick-${j}`)[0];
                    document.getElementsByClassName(`stick-${i}`)[0].className = `stick-${j}`;
                    oldJ.className = `stick-${i}`;
                } catch (err) {
                    // exit = true;
                }
                if (addColor(`stick-${i}`, 'light-grey')) return;
            }
            if (addColor(`stick-${j}`)) return;
            await sleep(1001 / speed);
        }

        // swap visually
        moveStickTo(`.stick-${high}`, 2 * stickWidth * (i + 1));
        moveStickTo(`.stick-${i + 1}`, 2 * stickWidth * high);
        await sleep(1001 / speed);

        // swap in code
        [array[i + 1], array[high]] = [array[high], array[i + 1]];

        // swap classes
        try {
            let oldJ = document.getElementsByClassName(`stick-${high}`)[0];
            document.getElementsByClassName(`stick-${i + 1}`)[0].className = `stick-${high}`;
            oldJ.className = `stick-${i + 1}`;
        } catch (err) {
            // exit = true;
        }

        //  reset all colors
        try {
            for (let i = 0; i < array.length; i++)
                document.getElementsByClassName(`stick-${i}`)[0].className = `stick-${i}`;
        } catch (err) {
            console.log(err);
        }
        return i + 1;
    };
    const qs = async (array, low, high) => {
        if (array.length === 1) return array;
        if (low < high) {
            const partitionIndex = await partition(array, low, high);

            await qs(array, low, partitionIndex - 1);
            await qs(array, partitionIndex, high);
        }
    };
    await qs(array, 0, high);
};

export default quickSort;

// const partition = (array, low, high) => {
//     let i = low - 1;
//     let pivot = array[high];
//     for (let j = low; j < high; j++) {
//         if (array[j] <= pivot) {
//             i++;
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }
//     [array[i + 1], array[high]] = [array[high], array[i + 1]];
//     return i + 1;
// };
// const qs = async (array, low, high) => {
//     if (array.length === 1) return array;
//     if (low < high) {
//         const partitionIndex = partition(array, low, high);

//         qs(array, low, partitionIndex - 1);
//         qs(array, partitionIndex, high);
//     }
// };

// let a = [3, 4, 1, 9, 2, 3, 0, 1];

// qs(a, 7).then(() => console.log(a));
