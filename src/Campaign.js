import React,{Component} from 'react';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import styled from 'styled-components';
import ParchImg from './assets/parchmentbackground.jpg'
import ScenarioCards from './Scenarios/ScenarioCards';
import ScenarioObjs from './Scenarios/ScenarioObjects';
//TODO: I want to add a hover event that displays 
// the chaos tokens when hovering over difficulty
const CampaignHeader = styled.h1`
    font-family: 'Euphoria Script', cursive;
    font-size:3em;
    text-align:center;
`;


const scenarios= ScenarioObjs[0].NOZ.scenarios;
const difficulties=ScenarioObjs[0].NOZ.difficulties;
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

const TokenContainer = styled.div`
    display:inline-block;
    border:1px solid black;
    img{
        width:50px;
        height:50px;
        margin:.5em;
    }
`;

class Campaign extends Component{
    constructor() {
        super();
        this.state = {
          showMenu: false,
          chosenSetting:null,
          chosenScenario:null,
          scenarios:scenarios,
          difficulties:difficulties,
          displayedTokens:null,
        }
        this.showTokens=this.showTokens.bind(this);
      }
    
    showTokens(setting){

            this.setState({chosenSetting:setting});
            //TODO: NOt displaying smoothly
            let chosenDifficulty={};
            for(let obj of this.state.difficulties){
                if(obj.label===this.state.chosenSetting){
                    console.log('found chosen setting');
                    this.setState({displayedTokens:obj.tokens});
                }
            }
    }
    render(){
        let tokenOutput = this.state.displayedTokens===null ? null: this.state.displayedTokens;
        return(
        <CampaignContainer className="campaign">
            <CampaignHeader>Night of the Zealot</CampaignHeader>
            <ScenarioCards scenarioObjs={this.state.scenarios}/>
            <DifficultyMenu callback={this.showTokens}/>
            <TokenContainer>
                {   
                    tokenOutput!==null?
                    tokenOutput.map((e,idx)=>{
                    return(<img src={e} key={idx}/>);
                }):null}
            </TokenContainer>
      </CampaignContainer>
        );
    }
}

export default Campaign;