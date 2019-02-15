import React, {Component} from 'react';
import styled from 'styled-components';
import ScenarioCard from './ScenarioCard';

const ScenarioWrapper = styled.div`
    border:1px solid black;
    width:100%;
    height:auto;
    display:flex;
    padding-bottom:5em;
    flex-direction:row;
    @media (max-width: 500px) {
        flex-direction:column;
        flex-wrap:wrap;
        align-items:center;

      }
`

class ScenarioCards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        // title:'The Gathering',
        // icon:gatheringIcon,
        // background_image:gatheringBackgroundImage,
        let scenarioOutputs= this.props.scenarioObjs;
        scenarioOutputs.map((e)=>{
            return (
                <ScenarioCard titleText={e.title} bgImg={e.background_image} iconImg={e.icon}/>
            )
        })
        return(
            <ScenarioWrapper id="scenario-cards">
                {        scenarioOutputs.map((e)=>{
            return (
                <ScenarioCard titleText={e.title} bgImg={e.background_image} iconImg={e.icon}/>
            )
        })}
            </ScenarioWrapper>
        );
    }
}
export default ScenarioCards;