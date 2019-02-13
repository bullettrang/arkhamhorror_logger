import React from 'react';

import styled from 'styled-components';

const IconImg = styled.img`
width:50px
height:50px
`
const DiffButton = styled.button`
display:inline-block;
width:50px
height:50px
border:none;
padding: 0;
margin: 5% 5%;
vertical-align: top;
background:none;
img{
 display:block;
 width:50px
 height:50px
}
`

 const DifficultyButton =(props)=>{
    return(
        <DiffButton onClick={()=>console.log('clicked easy')}><IconImg src={props.src}/></DiffButton>
    )
}

export default DifficultyButton;