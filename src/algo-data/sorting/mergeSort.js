const mergeSort = async (arr, stickWidth, speed, addColor, sleep, removeColor, moveStickTo) => {
    const ms = async (array) => {
        if (array.length > 1) {
            const mid = Math.floor(array.length / 2);
            const leftHalf = array.slice(0, mid);
            const rightHalf = array.slice(mid);

            await ms(leftHalf);
            await ms(rightHalf);

            let i, j, k;
            i = j = k = 0;
            while (i < leftHalf.length && j < rightHalf.length) {
                if (leftHalf[i] < rightHalf[j]) {
                    const elementAtK = document.getElementById(`stick-${array[k]}`);
                    elementAtK.style.height = `${leftHalf[i]}%`;
                    addColor(elementAtK.classList[0]);

                    await sleep(1001 / speed);
                    removeColor(elementAtK.classList[0]);
                    array[k] = leftHalf[i];
                    i++;
                } else {
                    const elementAtK = document.getElementById(`stick-${array[k]}`);
                    elementAtK.style.height = `${rightHalf[j]}%`;
                    addColor(elementAtK.classList[0]);

                    await sleep(1001 / speed);
                    removeColor(elementAtK.classList[0]);
                    array[k] = rightHalf[j];
                    j++;
                }
                k++;
            }
            while (i < leftHalf.length) {
                const elementAtK = document.getElementById(`stick-${array[k]}`);
                elementAtK.style.height = `${leftHalf[i]}%`;
                addColor(elementAtK.classList[0]);

                await sleep(1001 / speed);
                removeColor(elementAtK.classList[0]);

                array[k] = leftHalf[i];
                i++;
                k++;
            }
            while (j < rightHalf.length) {
                const elementAtK = document.getElementById(`stick-${array[k]}`);
                elementAtK.style.height = `${rightHalf[j]}%`;
                addColor(elementAtK.classList[0]);

                await sleep(1001 / speed);
                removeColor(elementAtK.classList[0]);
                array[k] = rightHalf[j];
                j++;
                k++;
            }
        }
    };
    await ms(arr);
    // resetting ids
    for (let i = 0; i < arr.length; i++) {
        document.getElementsByClassName(`stick-${i}`)[0].id = '';
    }
    for (let i = 0; i < arr.length; i++) {
        const doc = document.getElementsByClassName(`stick-${i}`)[0];
        doc.id = `stick-${parseFloat(doc.style.height)}`;
    }
};
export default mergeSort;

// const mergeSort = async (array) => {
//     if (array.length > 1) {
//         const mid = Math.floor(array.length / 2);
//         const leftHalf = array.slice(0, mid);
//         const rightHalf = array.slice(mid);

//         mergeSort(leftHalf);
//         mergeSort(rightHalf);

//         let i, j, k;
//         i = j = k = 0;
//         while (i < leftHalf.length && j < rightHalf.length) {
//             if (leftHalf[i] < rightHalf[j]) {
//                 array[k] = leftHalf[i];
//                 i++;
//             } else {
//                 array[k] = rightHalf[j];
//                 j++;
//             }
//             k++;
//         }
//         while (i < leftHalf.length) {
//             array[k] = leftHalf[i];
//             i++;
//             k++;
//         }
//         while (j < rightHalf.length) {
//             array[k] = rightHalf[j];
//             j++;
//             k++;
//         }
//     }
// };

// let a = [3, 4, 1, 9, 2, 3, 0, 1];

// mergeSort(a, 7).then(() => console.log(a));
