import React, {Component} from 'react';

import styled from 'styled-components';


const ButtonWrapper=styled.div`
    display:inline-block;
    margin:1em;
`
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

//  const DifficultyButton =(props)=>{
//     return(
//         <DiffButton onClick={props.clicked}><IconImg src={props.src}/></DiffButton>
//     )
// }

class DifficultyButton extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    }
    handleClick=()=>{
        console.log('handleClick [DifficultyButton]');
        this.setState({clicked:!this.state.clicked},()=>{
            this.props.callBack(this.state.clicked,this.props.setting);
        });
    }
    render(){
        return(
            <ButtonWrapper>
                <DiffButton 
                    onClick={this.handleClick}>
                        <IconImg 
                            src={this.props.src}/>
                </DiffButton>
            </ButtonWrapper>
        );
    }
}
export default DifficultyButton;