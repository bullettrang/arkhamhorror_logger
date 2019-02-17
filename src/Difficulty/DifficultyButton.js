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

class DifficultyButton extends Component{
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    }
    //toggles the chaos icons display via callback function to the stateful Campaign component
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked},()=>{
            this.props.callback(this.props.setting);
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