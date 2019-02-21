import React, { Component } from 'react';
import './App.css';
import Campaign from './Campaign';
import Home from './Home';
import styled from 'styled-components';
import LedgerImg from './assets/blackleatherbackground.png'
import Layout from './hoc/Layout';

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
  text-align:center;
 `

class App extends Component {
  render() {
    return (
        <Layout>
            <Home/>
        </Layout>
    );
  }
}

export default App;
