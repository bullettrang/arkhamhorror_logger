import React,{Component} from 'react';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import styled from 'styled-components';
import ParchImg from './assets/parchmentbackground.jpg'
import ScenarioCards from './ScenarioCards';
import ScenarioObjs from './ScenarioObjects';
//TODO: I want to add a hover event that displays 
// the chaos tokens when hovering over difficulty
const CampaignHeader = styled.h1`
    font-family: 'Euphoria Script', cursive;
    font-size:3em;
    text-align:center;
`;


const scenarios= ScenarioObjs;

const CampaignContainer = styled.div`
    position:relative;
    width:1000px;

    background-image:url(${ParchImg});
    border-radius: 10px 10px 10px 10px;
    border: 0px solid #000000;
    margin-bottom:15em;
    box-sizing: content-box;
    border-radius:.5;
`;

class Campaign extends Component{
    constructor() {
        super();
        this.state = {
          showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
      }
    
    showMenu(event){
        event.preventDefault();
        this.setState({showMenu:!this.state.showMenu});
    }
    render(){
        return(
        <CampaignContainer className="campaign">
            <CampaignHeader>Night of the Zealot</CampaignHeader>
            <ScenarioCards scenarioObjs={scenarios}/>
            <DifficultyMenu/>
      </CampaignContainer>
        );
    }
}

export default Campaign;