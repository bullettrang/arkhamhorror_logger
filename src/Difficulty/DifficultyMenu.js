import React,{Component} from 'react';
import styled from 'styled-components';
import DifficultyButtons from './DifficultyButtons';
import EasyImg from '../assets/easybutton.png';
import StandardImg from '../assets/standardbutton.png';
import HardImg from '../assets/hardbutton.png';
import ExpertImg from '../assets/expertbutton.png';


const ScenarioText = styled.p`
    font-family: 'Crimson Text', serif;
`;

let diffObjs=[
    {
        img: EasyImg,
        setting:'easy',
        description:'I want to experience the story'
    },
    {
        img: StandardImg,
        setting:'standard',
        description:'I want a challenge'
    },
    {
        img: HardImg,
        setting:'hard',
        description:'I want a true nightmare'
    },
    {
        img: ExpertImg,
        setting:'expert', 
        description:'I want Arkham Horror'
    },            
];
class DifficultyMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            displayed:false
        }
    }
    
    displayTokens=(clicked,setting)=>{
        if(clicked){
            //this.setState({displayed:!this.state.displayed});
            console.log('callback from child component '+setting);
        }
        
    }
    render(){
        return(
            <div>
                <ScenarioText>Select a Difficulty</ScenarioText>
                <DifficultyButtons diffs={diffObjs} callback={this.displayTokens}/>
            </div>
        );
    }
}

export default DifficultyMenu;