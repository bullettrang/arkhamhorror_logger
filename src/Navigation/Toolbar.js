import React from 'react';
import styled from 'styled-components';
import ElderSignLogo from '../assets/elderSignLogo.png';
//https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8125730?start=0

const ToolbarWrapper = styled.header`
    width:100%;
    display:flex;
    position:fixed;
    top:0;
    left:0;
    justify-content:space-between;
    align-items:center;
    padding:0 20px;
    box-sizing:border-box;
    z-index:90;
    height:2em;
    background:#f7f7f7;
`

const NavLinkWrapper = styled.nav`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:space-evenly;

    @media (max-width: 500px) {
        justify-content:center;
        align-items:center;
      }

    a{
        margin: 3em 2em; 
        height:100%;
        text-decoration: none;
        font-family: 'Crimson Text', serif;
        color:black;
        @media (max-width: 500px) {
            margin: .5em .5em; 
          }
    }
    img{
        position:relative;
        left:-2em;
        width:1em;
        height:1em;
        @media (max-width: 500px) {
            left:-.5em; 
          }
    }
`
//TODO: RENDER eldersign logo using span
const toolbar = (props)=>(
    <ToolbarWrapper>
        
        <NavLinkWrapper>
        <a href=""><span><img src={ElderSignLogo}/></span>Menu</a>
        <a href="">Logger</a>
        <a href="">Records</a>
        </NavLinkWrapper>
        <div>
        <nav>

        </nav>
        </div>
    </ToolbarWrapper>
);

export default toolbar;