import React from 'react';
import DifficultyButton from './DifficultyButton';



const DifficultyButtons=(props)=>{
    return(    props.diffs.map((e)=>{
                    return<DifficultyButton  flavorText={e.description} callBack={props.callback} setting={e.setting} key={e.setting} src={e.img}/>;
    }));

}

export default DifficultyButtons;