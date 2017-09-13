import React from 'react';


class FrameTable extends React.Component {

    render() {
        let rows = [];
        for (let i = 0; i < this.props.frameSize; i++) {
            rows.push(
                React.createElement(this.props.rowComponent, {
                    key: i,
                    data: this.props.data[this.props.scrollIndex + i],
                    cellComponent: this.props.cellComponent,
                    columns: this.props.columns,
                })
            );
        }
        return (
            <div className="table">
                {React.createElement(this.props.headerComponent, {
                    columnComponent: this.props.columnComponent,
                    columns: this.props.columns,
                })}
                {React.createElement(this.props.bodyComponent, {
                    onWheel: this.props.onWheel,
                }, rows)}
            </div>
        );
    }
}

export default FrameTable;
