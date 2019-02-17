import React from 'react';

export const SetUpButton=(props)=>{
    return(
        <button onClick={()=>props.clicked(props.scenarioLabel)}>{props.scenarioLabel + ' SETUP'}</button>
    )
}