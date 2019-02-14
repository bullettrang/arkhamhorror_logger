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
    
`

class ScenarioCards extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ScenarioWrapper id="scenario-cards">
                <ScenarioCard/>
                <ScenarioCard/>
                <ScenarioCard/>
            </ScenarioWrapper>
        );
    }
}
export default ScenarioCards;