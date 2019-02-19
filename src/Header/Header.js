import React from 'react';
import styled from 'styled-components';
import BannerImg from '../assets/banner.jpg';

import LogoImg from '../assets/lcgLogo.png'
import Toolbar from '../Navigation/Toolbar';
const Banner =styled.div`
  width:100%;
  background-image:url(${BannerImg});
  position:fixed;
  top:0;
  left:0;
  height:280px;
  background-repeat: no-repeat;
  background-position: left 0px top -308px;
  box-sizing:border-box;
  text-align:center;
`;

//TODO: Add media queries for mobile
const Logo = styled.img.attrs({
    src: LogoImg
  })`
    position:relative;
    top:80px;
    width:23em;
    z-index:999;
  `

  const Header =()=>{
      return(
      <Banner>
        <Toolbar/>
          <Logo/>
      </Banner>);
  }

  export default Header;