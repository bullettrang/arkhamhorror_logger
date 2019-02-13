import React, { Component } from 'react';
import './App.css';
import BannerImg from './assets/banner.jpg';
import LedgerImg from './assets/blackleatherbackground.png'
import LogoImg from './assets/lcgLogo.png'
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

 const Logo = styled.img.attrs({
  src: LogoImg
})`
  position:relative;
  top:80px;
  width:450px
  z-index:999;
`

 const MainContainer = styled.div`
  position:absolute;
  top:280px;
  width:100%;
  background-image:url(${LedgerImg});
  height:100%;
 `
class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner><Logo/></Banner>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
