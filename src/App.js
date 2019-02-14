import React, { Component } from 'react';
import './App.css';
import Campaign from './Campaign';
import Header from './Header/Header';
import styled from 'styled-components';
import LedgerImg from './assets/blackleatherbackground.png'

//old logo css settings
// top:80px;
// width:450px
 const MainContainer = styled.div`
  position:relative;
  top:250px;
  width:100%;
  background-image:url(${LedgerImg});
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-evenly; 
  flex-direction:row;
  flex-wrap:wrap;
  padding-top:3em;
  box-sizing: content-box;
 `

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainContainer>
          <Campaign/>
        </MainContainer>
      </div>
    );
  }
}

export default App;
