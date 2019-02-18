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
    opacity: ${props=> props.opacity ===1? 1:.5}
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
            clicked:false,
            opacity:1
        }
        this.ref=React.createRef();
    }
    
    componentDidMount(){
        //add event lister to button
        this.ref.addEventListener('mouseover',this.mouseOverHandler);
        this.ref.addEventListener('mouseleave',this.mouseLeaveHandler);
    }

    componentWillUnmount(){
        this.ref.removeEventListener('mouseover',this.mouseOverHandler);
        this.ref.removeEventListener('mouseleave',this.mouseLeaveHandler);
    }

    mouseOverHandler=()=>{
        console.log('mouseOverHandler')
        this.setState({opacity:0.5});
    }
    mouseLeaveHandler=()=>{
        console.log('mouseLeaveHandler')
        this.setState({opacity:1});
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
                    ref={ref=>this.ref=ref} 
                    onClick={this.handleClick}
                    opacity={this.state.opacity}>
                        <IconImg 
                            src={this.props.src}/>
                </DiffButton>
            </ButtonWrapper>
        );
    }
}
export default DifficultyButton;