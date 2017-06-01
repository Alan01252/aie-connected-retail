import React, {Component} from 'react';

const ReactDataGrid = require('react-data-grid');

class Grid extends Component {

    constructor(props) {
        super(props);
        console.log(this);
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

        console.log(this._rows);
    }

    rowGetter(i) {
        console.log(this);
        return this._rows[i];
    }

    render() {
        return (

            <div className="Grid">
                <h1>Grid</h1>
                <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetter.bind(this)}
                    rowsCount={this._rows.length}
                    minHeight={500}/>
            </div>
        );
    }

}

export default Grid;
