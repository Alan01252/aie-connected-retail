import React, {Component} from 'react';
import './Map.css';
import {Grid} from "react-bootstrap";
import ReactMapboxGl from "react-mapbox-gl";

class Map extends Component {

    render() {


        /* eslint-disable */
        return (
            <div className="Map">
                <Grid fluid>
                    <h1>Map</h1>

                    <ReactMapboxGl
                        style='mapbox://styles/alan01252/cj3fsfzx4000n2rqpkduuhlqh'
                        center={[-4.3, 54.7]}
                        zoom={[5]}
                        accessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
                        containerStyle={{
                            height: "800px",
                            width: "600px"
                        }}>
                    </ReactMapboxGl>

                </Grid>
            </div>
        );

        /* eslint-enable */
    }
}

export default Map;