import React from 'react';

import DefaultFilter from '../DefaultFilter';
import { SORT_NONE, SORT_ASC, SORT_DSC } from '../../constants';


const SORT_ICONS = {
    [SORT_ASC]: '↑',
    [SORT_DSC]: '↓',
    [SORT_NONE]: '',
};

const Column = props => {
    const {
        dataField, id, width, children,
        sortDirection, onSortChange, onSortSwitch,
        filter, onFilterChange, filterComponent
    } = props;
    return (
        <div className="react-frame-table--column"
             style={{width: width || 'auto'}}
        >
            <div className="react-frame-table--column-label" onClick={() => onSortSwitch()}>
                {SORT_ICONS[sortDirection]}
                {children}
            </div>
            <div className="react-frame-table--column-filter">
                {React.createElement(filterComponent || DefaultFilter, {
                    value: filter,
                    onChange: onFilterChange,
                })}
            </div>
        </div>
    );
};

export default Column;
