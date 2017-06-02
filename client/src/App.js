import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Dashboard from "./pages/Dashboard/Dashboard";
import Map from "./pages/Map/Map";
import Charts from "./pages/Charts/Charts";
import DataGrid from "./pages/DataGrid/DataGrid";
import './App.css';

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/map" component={Map}/>
                    <Route exact path="/charts" component={Charts}/>
                    <Route exact path="/grid" component={DataGrid}/>
                </div>
            </Router>
        );
    }
}

export default App;
