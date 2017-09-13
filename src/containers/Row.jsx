import React from 'react';

import Cell from './Cell';


class Row extends React.Component {

    render() {
        const { rowComponent, cellComponent, data, columns } = this.props;
        return (
            React.createElement(rowComponent, {}, columns.map((column, index) => (
                <Cell cellComponent={cellComponent}
                      key={index}
                      value={data[column.props.dataField]}
                      row={data}
                      column={column}
                />
            )))
        );
    }
}

export default Row;