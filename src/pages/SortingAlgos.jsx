import React from 'react';

import AlgoLayout from '../components/shared/AlgoLayout/AlgoLayout';
import sortingAlgorithms from '../algo-data/sorting/sortingAlgorithmsInformaion';

const sorting = () => {
    return <AlgoLayout algosType={'sorting'} algos={sortingAlgorithms} />;
};

export default sorting;
