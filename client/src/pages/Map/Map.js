import React, {Component} from 'react';
import './Map.css';
import {Grid} from "react-bootstrap";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class Map extends Component {

    state = {
        markers: [{
            position: {
                lat: 51.378,
                lng: 0.4360,
            },
            key: `London`,
            defaultAnimation: 2,
        }],
    };

    render() {


        return (

            <div className="Map">
                <Grid fluid>
                    <h1>Map</h1>

                    <ReactMapboxGl
                        style={"mapbox://styles/mapbox/basic-v9"}
                        center={[-1.109970527, 51.52916347]}
                        accessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
                        containerStyle={{
                            height: "800px",
                            width: "600px"
                        }}>
                    </ReactMapboxGl>

                </Grid>
            </div>
        );
    }
}

export default Map;