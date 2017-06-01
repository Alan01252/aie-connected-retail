import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Dashboard from "./pages/Dashboard/Dashboard";
import Map from "./pages/Map/Map";
import Charts from "./pages/Charts/Charts";
import Grid from "./pages/Grid/Grid";

class App extends Component {
    render() {
        return (

            <Router>
                <div className="container">
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/map" component={Map}/>
                    <Route exact path="/charts" component={Charts}/>
                    <Route exact path="/grid" component={Grid}/>
                </div>
            </Router>
        );
    }
}

export default App;
