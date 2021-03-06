import React from 'react';
import styled from 'styled-components';

const ScenarioTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:-2em;
    margin-bottom:-2em;
    justify-content:center;
`;
  const TitleStyled = styled.h3`
    font-size:1em;
    margin:.5em;
    position:relative;
    top:3em;  
  `;

  const ScenarioIcon=styled.div`
    background-image: url(${props => props.iconImg});
    background-size:contain;
    background-repeat:no-repeat;
    width:3em;
    height:3em;
    position:relative;
    top:2em;
    left:1em;
  `;

  const ScenarioTitle = (props)=>{
      return(
          <ScenarioTitleWrapper className="scenario-title">
            <TitleStyled>{props.title}</TitleStyled>
            <ScenarioIcon iconImg={props.iconImg}/>
            
          </ScenarioTitleWrapper>
      );
  }

  export default ScenarioTitle;