import React from 'react';
import styled from 'styled-components';
import LedgerImg from './assets/blackleatherbackground.png'
import Campaign from './Campaign';

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

const Home =()=>{
    return(
        <MainContainer>
            <Campaign/>
        </MainContainer>
    )
};

export default Home;