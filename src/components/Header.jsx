import React from 'react';


class Row extends React.Component {

    render() {
        return (
            <div className="header">
                {this.props.children}
            </div>
        );
    }
}

export default Row;
