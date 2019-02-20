import React,{Component} from 'react';
import OldPaper from './assets/oldpaper.jpg';
import styled from 'styled-components';
import skull from './assets/skull.png';
import combat from './assets/fighticon.png';
//TODO:

//log items stored in array

//add log items
//display log items
//delete log items
//animations
const LogWrapper = styled.div`
    width:1000px;
    height:500px;
    background-image:url(${OldPaper});

    p{
        font-family: 'Crimson Text', serif;
    }
    span{
        color:green;
    }
    img{
        height:1em;
        width:1em;
        margin: 0 .5em ;
    }
    .fight{
        color:red;
    }
`


class LogContainer extends Component{

    render(){
        return(
            <LogWrapper>
                <p>Mark Harrigan <span className="fight">FIGHT</span> rat with [.45,(+2)<img src={combat}/>] <span>SUCCESS<span><img src={skull}/></span></span></p>
                <p>Log stuff</p>
                <p>Log stuff</p>
                <p>Log stuff</p>
            </LogWrapper>
        )

    }
}

export default LogContainer;