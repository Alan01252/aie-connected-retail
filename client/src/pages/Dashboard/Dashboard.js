import React, {Component} from 'react';
import './Dashboard.css';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Notification from "./Notification";

class Dashboard extends Component {


    render() {


        const Title = styled.h1`
                        font-size: 1.5em;
                        text-align: center;
                        color: white;
                    `;
        return (
            <div className="Dashboard">
                <Notification />
                <Grid fluid>
                    <Title>CONNECTED RETAIL</Title>
                    <Row className="show-grid">
                        <Col bsClass="col-md-5ths col-" xs="3">
                            <Panel>
                                <Link to="/map">
                                    Map
                                </Link>
                            </Panel>
                        </Col>
                        <Col bsClass="col-md-5ths col-" xs="3">
                            <Panel>
                                <Link to="/charts">
                                    Charts
                                </Link>
                            </Panel>
                        </Col>
                        <Col bsClass="col-md-5ths col-" xs="3">
                            <Panel>
                                <Link to="/grid">
                                    Grid
                                </Link>
                            </Panel>
                        </Col>
                        <Col bsClass="col-md-5ths col-" xs="3">
                            <Panel>
                                Page Four
                            </Panel>
                        </Col>
                        <Col bsClass="col-md-5ths col-" xs="3">
                            <Panel>
                                Page Five
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;