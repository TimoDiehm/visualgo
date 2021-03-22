const sortingAlgorithms = [
    {
        name: 'Bubble Sort',
        intro:
            'This is one of the slowest sorting algorithms due to its simplicity. Nevertheless, it is relatively easy and quick to implement.',
        explanation:
            'This algorithm simply iterates through the array while changing two items one by one if they are not in the right order. In this visualization, the algorithm iterates through the array from left to right and swaps the position of two sticks if the first one is bigger than the second one until there was a complete iteration without any swap. That means the array is sorted. Although it is not efficient, it is easy to implement and recommendable if the array is relatively small.',
        code: 'bubbleSort.png',
        complexity: {
            worstTime: 'O(n^2)',
            bestTime: 'O(n) ',
            avgTime: 'O(n^2)',
            space: 'O(1) ',
        },
        difficulty: 'easy',
    },
    {
        name: 'Merge Sort',
        intro: 'This is an efficient, comparison-based, divide-and-conquer sorting algorithm.',
        explanation:
            'Merge sort repeatedly breaks down an array into several subarrays until each subarray consists of a single element and merging those subarrays in a manner that results into a sorted array.',
        code: 'mergeSort.png',
        complexity: {
            worstTime: 'O(n log(n))',
            bestTime: 'O(n log(n))',
            avgTime: 'O(n log(n))',
            space: 'O(n)',
        },
        difficulty: 'middle',
    },
    {
        name: 'Quicksort',
        intro:
            'This is an efficient, commonly used, divide-and-conquer algorithm, wich is averagely faster than Merge Sort.',
        explanation:
            'Quicksort creates two empty arrays to hold elements less than the pivot value and elements greater than the pivot value, and then recursively sort the subarrays. There are two basic operations in this algorithm, swapping items in place and partitioning a section of the array.',
        code: 'quickSort.png',
        complexity: {
            worstTime: 'O(n^2)',
            bestTime: 'O(n log(n))',
            avgTime: 'O(n log(n))',
            space: 'O(1)',
        },
        difficulty: 'middle',
    },
    {
        name: 'Tim Sort',
        intro:
            'Deriving from Merge Sort and Insertion Sort, this is a hybrid algorithm, which is very efficient but also not easy to implement.',
        explanation:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        code: 'timSort.png',
        complexity: {
            worstTime: 'O(n log(n))',
            bestTime: 'O(n)',
            avgTime: 'O(n log(n))',
            space: 'O(n)',
        },
        difficulty: 'hard',
    },
];

export default sortingAlgorithms;
