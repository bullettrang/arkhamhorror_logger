import React,{Component} from 'react';
import DifficultyMenu from './Difficulty/DifficultyMenu';
import styled from 'styled-components';
import ParchImg from './assets/parchmentbackground.jpg'
import ScenarioCards from './Scenarios/ScenarioCards';
import ScenarioObjs from './Scenarios/ScenarioObjects';
import {NOZ_TITLES} from './Scenarios/ScenarioObjects';
import {SetUpContainer} from './SetUp';
//TODO: I want to add a hover event that displays 
// the chaos tokens when hovering over difficulty
const CampaignHeader = styled.h1`
    font-family: 'Euphoria Script', cursive;
    font-size:3em;
    text-align:center;
`;


const scenarios= ScenarioObjs[0].NOZ.scenarios;
const difficulties=ScenarioObjs[0].NOZ.difficulties;
const setups = ScenarioObjs[0].NOZ.setup;
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
    constructor(props) {
        super(props);
        this.state = {
          showMenu: false,
          chosenSetting:null,
          chosenScenario:null,
          scenarios:scenarios,
          difficulties:difficulties,
          displayedTokens:null,
          clickedSetUp:false,
          chosenSetUp:null,
          setups:setups,
          displayedSetUp:null,
        }
        this.showTokens=this.showTokens.bind(this);
        this.setUpHandler=this.setUpHandler.bind(this);
        this.displaySetUpInstructions=this.displaySetUpInstructions.bind(this);
      }
    
    showTokens(setting){
            this.setState({chosenSetting:setting});
            for(let obj of this.state.difficulties){
                if(obj.label===this.state.chosenSetting){
                    console.log('found chosen setting');
                    this.setState({displayedTokens:obj.tokens});
                }
            }
    }

    setUpHandler(clickedSetUp){
        console.log('setUpHandler()');
        this.setState({clickedSetUp:!this.state.clickedSetUp});

        //whichever set up button is clicked, display that instruction procedure
        this.setState({chosenSetUp:clickedSetUp},()=>{
            console.log("chosen SETUP IS "+this.state.chosenSetUp);
        });
        this.displaySetUpInstructions();
    }

    displaySetUpInstructions(){
        for(let setup of setups){
            if(setup.label===this.state.chosenSetUp){
                this.setState({displayedSetUp:setup.procedures},()=>{console.log('displayedSetUp has been init '+setup.label)})
            }
        }
    }

    //TODO: wrap instructionOutput into its own component
    render(){
        let instructionOutput = this.state.displayedSetUp !==null ? this.state.displayedSetUp.map(e=><li key={e}>{e}</li>) :null;
        let tokenOutput = this.state.displayedTokens===null ? null: this.state.displayedTokens;
        return(
        <CampaignContainer className="campaign">
            <CampaignHeader>Night of the Zealot</CampaignHeader>
            <ScenarioCards scenarioObjs={this.state.scenarios} setUpCallBack={this.setUpHandler}/>
            {<ul>{instructionOutput}</ul>}
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