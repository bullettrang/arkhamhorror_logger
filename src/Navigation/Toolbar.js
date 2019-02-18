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
    nav{
        height:100%;
    }
    img{
        width:.6em;
        height:.6em;
    }

`
//TODO: RENDER eldersign logo using span
const toolbar = (props)=>(
    <ToolbarWrapper>
        <div>Menu<span><img src={ElderSignLogo}/></span></div>
        <nav>
        
        </nav>
    </ToolbarWrapper>
);

export default toolbar;