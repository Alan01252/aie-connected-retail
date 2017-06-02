import React, {Component} from 'react';
import {Grid, Col, Row} from "react-bootstrap";
import ProductFetcher from './ProductFetcher';

const ReactDataGrid = require('react-data-grid');

class DataGrid extends Component {

    state = {
        products: []
    };

    constructor(props) {
        super(props);
        this.createRows();
        this._columns = [
            {key: 'object_id', name: 'Object ID'},
            {key: 'latitude', name: 'Latitude'},
            {key: 'longitude', name: 'Longitude'}
        ];
    }

    createRows() {
        let rows = [];
        ProductFetcher.search(null, (products) => {
            this.setState({
                products: products
            })
        });
    }

    rowGetter(i) {
        return this.state.products[i];
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
                            rowsCount={this.state.products.length}
                            minHeight={500}/>
                    </Col>
                </Row>
            </Grid>
        );
    }

}

export default DataGrid;
