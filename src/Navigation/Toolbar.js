import React from 'react';
import styled from 'styled-components';

//https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8125730?start=0

const ToolbarWrapper = styled.header`
    width:100%;
    background-color:purple;
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
`

const toolbar = (props)=>(
    <ToolbarWrapper>
        <div>Menu</div>
        <div>LOGO</div>
        <nav>

        </nav>
    </ToolbarWrapper>
);

export default toolbar;