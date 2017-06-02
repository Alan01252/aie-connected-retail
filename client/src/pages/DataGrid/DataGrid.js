import React, {Component} from 'react';
import {Grid, Col, Row} from "react-bootstrap";

const ReactDataGrid = require('react-data-grid');

class DataGrid extends Component {

    constructor(props) {
        super(props);
        this.createRows();
        this._columns = [
            {key: 'id', name: 'ID'},
            {key: 'title', name: 'Title'},
            {key: 'count', name: 'Count'}];
    }

    createRows() {
        let rows = [];
        for (let i = 1; i < 1000; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }


        this._rows = rows;
    }

    rowGetter(i) {
        return this._rows[i];
    }

    render() {
        return (

            <Grid fluid>

                <h1>Grid</h1>
                <Row>
                    <Col xs="12">
                        <ReactDataGrid
                            columns={this._columns}
                            rowGetter={this.rowGetter.bind(this)}
                            rowsCount={this._rows.length}
                            minHeight={500}/>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default DataGrid;
