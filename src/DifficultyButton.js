import React from 'react';
import EasyImg from './assets/easybutton.png';
import styled from 'styled-components';

const EasyIcon = styled.img`
width:50px
height:50px
`
const DiffButton = styled.button`
display:inline-block;
width:50px
height:50px
border:none;
padding: 0;
margin: 0;
vertical-align: top;
background:none;
img{
 display:block;
 width:50px
 height:50px
}
`

 const DifficultyButton =()=>{
    return(
        <DiffButton onClick={()=>console.log('clicked easy')}><EasyIcon src={EasyImg}/></DiffButton>
    )
}

export default DifficultyButton;