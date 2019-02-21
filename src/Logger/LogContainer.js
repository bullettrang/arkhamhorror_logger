import React,{Component} from 'react';
import styled from 'styled-components';
import OldPaper from  '../assets/logger-background.jpg';
import {skill_icons} from './LoggerConstants';
import agility from '../assets/agilityicon.png';
const LogWrapper = styled.div`
    width:1000px;
    height:1000px;
    background-image:url(${OldPaper});
`;

const icons = skill_icons;
console.log(icons);
class LogContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            investigators:[],
            skillChecks:[{
                name:'will',
                total:0,
                passed:0,
                failed:0
            },{
                name:'combat',
                total:0,
                passed:0,
                failed:0
            },{
                name:'intellect',
                total:0,
                passed:0,
                failed:0
            },{
                name:'agility',
                total:0,
                passed:0,
                failed:0
            }],

        }
    }
    render(){
        return(
            <LogWrapper>
                <span>Roland Banks</span> 
                <div style={{backgroundImage:"url("+agility+")"}}>
                    <h2>Select Skill Check</h2>
                    <select style= {{width:"300px"}}>
                        <option style={{backgroundImage:"url("+agility+")"}}>Agility</option>
                        <option>Agility</option>
                        <option>Intellect</option>
                        <option>Will</option>
                    </select>
                </div>
            </LogWrapper>
        )
    }
}

export default LogContainer;


