import React, { Component } from 'react';
import './App.css';
import BannerImg from './assets/banner.jpg';
import LedgerImg from './assets/blackleatherbackground.png'
import LogoImg from './assets/lcgLogo.png'
import ParchImg from './assets/parchmentbackground.jpg'
import DifficultyButtons from './DifficultyButtons';
import styled from 'styled-components';


 const Banner =styled.div`
  width:100%;
  background-image:url(${BannerImg});
  position:fixed;
  top:0;
  left:0;
  height:280px;
  background-repeat: no-repeat;
  background-position: left 0px top -330px;
 `;

//TODO: Adjust Logo for mobile screens
 const Logo = styled.img.attrs({
  src: LogoImg
})`
  position:relative;
  top:80px;
  width:450px
  z-index:999;
`

 const MainContainer = styled.div`
  position:relative;
  top:280px;
  width:100%;
  background-image:url(${LedgerImg});
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:row;
  flex-wrap:wrap;
  padding-top:5em;
 `
 const ScenarioContainer = styled.div`
  position:relative;
  width:450px;
  height:450px;
  z-index:99;
  background-image:url(${ParchImg});
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  margin-bottom:15em;
  text-align:center;
 `

 const NOZTitle = styled.h1`
  font-family: 'Euphoria Script', cursive;
 `;

 const ScenarioText = styled.p`
  font-family: 'Crimson Text', serif;
 `;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner><Logo/></Banner>
        <MainContainer>
          <ScenarioContainer>
          <NOZTitle>Night of the Zealot</NOZTitle>
          <ScenarioText>Select a Difficulty</ScenarioText>
          <DifficultyButtons/>
          </ScenarioContainer>

        </MainContainer>
      </div>
    );
  }
}

export default App;
