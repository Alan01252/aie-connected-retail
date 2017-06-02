import React, {Component} from 'react';
import {Socket} from 'react-socket-io';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Dashboard from "./pages/Dashboard/Dashboard";
import Map from "./pages/Map/Map";
import Charts from "./pages/Charts/Charts";
import DataGrid from "./pages/DataGrid/DataGrid";

import './App.css';
import 'react-notifications/lib/notifications.css';

const uri = 'http://localhost:10010';
const options = {transports: ['websocket']};

class App extends Component {


    render() {
        return (

            <div>
                <Socket uri={uri} options={options}>
                    <Router>
                        <div className="App">
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/map" component={Map}/>
                            <Route exact path="/charts" component={Charts}/>
                            <Route exact path="/grid" component={DataGrid}/>
                        </div>
                    </Router>
                </Socket>
            </div>
        );
    }
}

export default App;
