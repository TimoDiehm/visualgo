import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import SortingAlgos from './pages/SortingAlgos';

function App() {
    const routes = (
        <Switch>
            <Route path="/algorithms/sorting" exact>
                <SortingAlgos />
            </Route>
            <Route path="/" exact>
                <SortingAlgos />
            </Route>
            <Redirect to="/" />
        </Switch>
    );

    return (
        // <Router>
        //     <Suspense fallback={<div>Loading Screen..</div>}>{routes}</Suspense>
        // </Router>
        <div>
            <SortingAlgos />
        </div>
    );
}

export default App;
