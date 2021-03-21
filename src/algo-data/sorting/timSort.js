const timSort = async (array, stickWidth, speed, addColor, sleep, removeColor, moveStickTo) => {
    const minMerge = 32;

    const calcMinRun = (n) => {
        let r = 0;
        while (n >= minMerge) {
            r = r | (n & 1);
            n >>= 1;
        }
        return n + r;
    };

    const insertionSort = async (arr, left, right) => {
        for (let i = left + 1; i < right + 1; i++) {
            let j = i;

            while (j > left && arr[j] < arr[j - 1]) {
                //////////////////////////////////// SWAP !!!!!!!!!!!!!!!!!
                moveStickTo(`.stick-${j}`, 2 * stickWidth * (j - 1));
                moveStickTo(`.stick-${j - 1}`, 2 * stickWidth * j);
                await sleep(1001 / speed);

                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

                try {
                    let oldJ = document.getElementsByClassName(`stick-${j}`)[0];
                    document.getElementsByClassName(`stick-${j - 1}`)[0].className = `stick-${j}`;
                    oldJ.className = `stick-${j - 1}`;
                } catch (err) {
                    // exit = true;
                    console.log(err);
                }

                j--;
            }
        }
    };

    const merge = async (arr, l, m, r) => {
        const [len1, len2] = [m - l + 1, r - m];
        const [left, right] = [[], []];

        for (let i = 0; i < len1; i++) {
            left.push(arr[l + i]);
        }
        for (let i = 0; i < len2; i++) {
            right.push(arr[m + 1 + i]);
        }

        let i, j, k;
        i = j = 0;
        k = l;

        while (i < len1 && j < len2) {
            if (left[i] <= right[j]) {
                const elementAtK = document.getElementById(`stick-${arr[k]}`);
                elementAtK.style.height = `${left[i]}%`;

                await sleep(10001 / speed);
                arr[k] = left[i];
                i++;
            } else {
                const elementAtK = document.getElementById(`stick-${arr[k]}`);
                elementAtK.style.height = `${right[j]}%`;

                await sleep(10001 / speed);
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < len1) {
            const elementAtK = document.getElementById(`stick-${arr[k]}`);
            elementAtK.style.height = `${left[i]}%`;

            await sleep(10001 / speed);
            arr[k] = left[i];
            k++;
            i++;
        }
        while (j < len2) {
            const elementAtK = document.getElementById(`stick-${arr[k]}`);
            elementAtK.style.height = `${right[j]}%`;

            await sleep(10001 / speed);
            arr[k] = right[j];
            k++;
            j++;
        }

        // resetting ids
        for (let i = 0; i < arr.length; i++) {
            document.getElementsByClassName(`stick-${i}`)[0].id = '';
        }
        for (let i = 0; i < arr.length; i++) {
            const doc = document.getElementsByClassName(`stick-${i}`)[0];
            doc.id = `stick-${parseFloat(doc.style.height)}`;
        }
    };

    const ts = async (arr) => {
        const n = arr.length;
        const minRun = calcMinRun(n);

        for (let start = 0; start < n; start += minRun) {
            const end = Math.min(start + minRun - 1, n - 1);
            await insertionSort(arr, start, end);
        }

        console.log('now ms');

        let size = minRun;
        while (size < n) {
            for (let left = 0; left < n; left = left + size * 2) {
                const mid = Math.min(n - 1, left + size - 1);
                const right = Math.min(left + 2 * size - 1, n - 1);

                if (mid < right) await merge(arr, left, mid, right);
            }
            size = size * 2;
        }
    };
    ts(array);
    console.log(array);
};

export default timSort;

// const timSort = async (array) => {
//     const minMerge = 64;

//     const calcMinRun = (n) => {
//         let r = 0;
//         while (n >= minMerge) {
//             r = r | (n & 1);
//             n >>= 1;
//         }
//         return n + r;
//     };

//     const insertionSort = (arr, left, right) => {
//         for (let i = left + 1; i < right + 1; i++) {
//             let j = i;

//             while (j > left && arr[j] < arr[j - 1]) {
//                 //////////////////////////////////// SWAP !!!!!!!!!!!!!!!!!
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//                 j--;
//             }
//         }
//     };

//     const merge = (arr, l, m, r) => {
//         const [len1, len2] = [m - l + 1, r - m];
//         const [left, right] = [[], []];

//         for (let i = 0; i < len1; i++) {
//             left.push(arr[l + i]);
//         }
//         for (let i = 0; i < len2; i++) {
//             right.push(arr[m + 1 + i]);
//         }

//         let i, j, k;
//         i = j = 0;
//         k = l;

//         while (i < len1 && j < len2) {
//             if (left[i] <= right[j]) {
//                 arr[k] = left[i];
//                 i++;
//             } else {
//                 arr[k] = right[j];
//                 j++;
//             }
//             k++;
//         }

//         while (i < len1) {
//             arr[k] = left[i];
//             k++;
//             i++;
//         }
//         while (j < len2) {
//             arr[k] = right[j];
//             k++;
//             j++;
//         }
//     };

//     const ts = async (arr) => {
//         const n = arr.length;
//         const minRun = calcMinRun(n);

//         for (let start = 0; start < n; start += minRun) {
//             const end = Math.min(start + minRun - 1, n - 1);
//             insertionSort(arr, start, end);
//         }

//         let size = minRun;
//         while (size < n) {
//             for (let left = 0; left < n; left = left + size * 2) {
//                 const mid = Math.min(n - 1, left + size - 1);
//                 const right = Math.min(left + 2 * size - 1, n - 1);

//                 if (mid < right) merge(arr, left, mid, right);
//             }
//             size = size * 2;
//         }
//     };
//     ts(array);
// };

// let a = [
//     -2,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
//     7,
//     15,
//     -14,
//     0,
//     15,
//     0,
//     7,
//     -7,
//     -4,
//     -13,
//     5,
//     8,
//     -14,
//     12,
// ];
// timSort(a).then(() => console.log(a));
