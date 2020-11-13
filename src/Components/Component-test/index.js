import React from 'react';

const FunctionComponent = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <div key={index}>
                <span> {row.name} </span>
            </div>
        )
    })
    return (
        <div>
            {rows}
        </div>
    )
}

const ComponentTest = (props) => {
    const {characterData} = props;

    return (
        <div>
            <FunctionComponent characterData={characterData}/>
        </div>
    );
}

export default ComponentTest;