import React from 'react';


class Row extends React.Component {

    render() {
        return (
            <div className="row">
                {this.props.columns.map((column, index) => (
                    React.createElement(this.props.cellComponent, {
                        key: index,
                        value: this.props.data[column.key],
                        row: this.props.data,
                        column: column,
                    })
                ))}
            </div>
        );
    }
}

export default Row;
