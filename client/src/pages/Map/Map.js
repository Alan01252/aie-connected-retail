import React, {Component} from 'react';
import './Map.css';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";


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


        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={6}
                defaultCenter={{lat: 54.592505, lng: -3.933594}}
                onClick={props.onMapClick}
            >
                {props.markers.map((marker, index) => (
                    <Marker
                        {...marker}
                        onRightClick={() => props.onMarkerRightClick(index)}
                    />
                ))}
            </GoogleMap>
        ));

        return (

            <div className="Map">
                <h1>Map</h1>
                <GettingStartedGoogleMap
                    containerElement={
                        <div style={{height: `800px`}}/>
                    }
                    mapElement={
                        <div style={{height: `800px`}}/>
                    }
                    markers={this.state.markers}
                />
            </div>
        );
    }
}

export default Map;