import React, {Component} from 'react';
import './Dashboard.css';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from "react-router-dom";

class Dashboard extends Component {


    render() {


        const Title = styled.h1`
                        font-size: 1.5em;
                        text-align: center;
                        color: palevioletred;
                    `;
        return (
            <div className="Dashboard">
                <h1>Dashboard</h1>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3}>
                            <Panel>
                                <Title>
                                    <Link to="/map">
                                        Map
                                    </Link>
                                </Title>
                            </Panel>
                        </Col>
                        <Col xs={3}>
                            <Panel>
                                <Title>
                                    <Link to="/charts">
                                        Charts
                                    </Link>
                                </Title>
                            </Panel>
                        </Col>
                        <Col xs={3}>
                            <Panel>
                                <Title>
                                    <Link to="/grid">
                                        Grid
                                    </Link>
                                </Title>
                            </Panel>
                        </Col>
                        <Col xs={3}>
                            <Panel><Title>Page Four</Title></Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;