import React from 'react';
import styled from 'styled-components';
//import titleBackgroundImage from './assets/thegatheringtitleimg.jpg';
import ScenarioTitle from './ScenarioTitle';
const ScenarioCardWrapper= styled.div`
    width:33.3%;
    display:block;
    margin:1em;
    @media (max-width: 500px) {
        min-width:300px;
      }

    
`

//https://pagecrafter.com/maintain-aspect-ratio-for-html-element-using-only-css-in-a-responsive-design/
const AgendaProfilePic = styled.div`
    background-image: url(${props => props.bgImg || ""});
    position: relative;
    width: 100%;
    height: 0;
    margin-top:5em;
    padding-bottom: 100%;
    background-size: 100%;
    max-width:100%;
    height:auto;
`;


//todo div image won't display....

const ScenarioCard =(props)=>{
    return(
        <ScenarioCardWrapper className="scenario-card">
            <ScenarioTitle title={props.titleText} iconImg={props.iconImg}/>
            <div className="scenario-thumbnail">
                <AgendaProfilePic bgImg={props.bgImg}/>
            </div>
            <p>{"rating system"}</p>
            <p>{"instructions"}</p>
        </ScenarioCardWrapper>
    );
}

export default ScenarioCard;