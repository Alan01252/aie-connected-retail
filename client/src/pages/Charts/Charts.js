import React, {Component} from 'react';
import './Charts.css';
import {Line} from 'react-chartjs-2';
import {Grid, Row, Col} from 'react-bootstrap';

class Charts extends Component {

    rand(min, max, num) {
        var rtn = [];
        while (rtn.length < num) {
            rtn.push((Math.random() * (max - min)) + min);
        }
        return rtn;
    }

    getData() {

        return {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: this.rand(32, 100, 7)
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: this.rand(32, 100, 7)
                }
            ]
        };

    }

    render() {

        return (
            <div className="Charts">
                <Grid fluid>
                    <h1>Charts</h1>
                    <Row className="show-grid">
                        <Col xs={6}>
                            <Line data={this.getData()}/>
                        </Col>
                        <Col xs={6}>
                            <Line data={this.getData()}/>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6}>
                            <Line data={this.getData()}/>
                        </Col>
                        <Col xs={6}>
                            <Line data={this.getData()}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Charts;