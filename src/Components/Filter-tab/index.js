import './Filter-tab.css';

import React from 'react';

const FilterTab = (props) => {

    const btnsFilter = props.categories.map( (btn, index) => {
        return (
            <button key={index} type="button" className="btn btn-secondary"
                onClick= { () => props.handleFilterList(btn.value)}>{btn.description}</button>
        )

    });
    return (
        <div className=" btn-group Container-filters" role="group">
            {/* <button className='btn btn-secondary active'>Active</button> */}
            {btnsFilter}
            
        </div>
        
    );
}

export default FilterTab;