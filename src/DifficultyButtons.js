import React from 'react';
import DifficultyButton from './DifficultyButton';
import EasyImg from './assets/easybutton.png';
import StandardImg from './assets/standardbutton.png';
import HardImg from './assets/hardbutton.png';
import ExpertImg from './assets/expertbutton.png';
let diffObjs=[
    {
        img: EasyImg,
        setting:'easy'
    },
    {
        img: StandardImg,
        setting:'standard'
    },
    {
        img: HardImg,
        setting:'hard'
    },
    {
        img: ExpertImg,
        setting:'expert'
    },            
]

const DifficultyButtons=()=>{
    return(    diffObjs.map((e)=>{
        return<DifficultyButton key={e.setting} src={e.img}/>;
    }));

}

export default DifficultyButtons;