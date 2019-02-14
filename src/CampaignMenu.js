import React,{Component} from 'react';
import styled from 'styled-components';


//TODO: I want to add a hover event that displays 
// the chaos tokens when hovering over difficulty
const CampaignHeader = styled.h1`
    font-family: 'Euphoria Script', cursive;
`;


const scenarioTitles=['The Gathering','The Midnight Masks','The Devourer Below'];

class CampaignMenu extends Component{
    constructor() {
        super();
        this.state = {
          showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
      }
    
    showMenu(event){
        event.preventDefault();
        this.setState({showMenu:!this.state.showMenu});
    }
    render(){
        const scenarioentries= scenarioTitles.map((e)=>{
            return(
                <button key={e}>{e}</button>
            );
        })
        return(
        <div>
            <CampaignHeader>Night of the Zealot</CampaignHeader>
            <button onClick={this.showMenu}>
              Show Scenarios
            </button>
            {
            this.state.showMenu ? (
                <div className="menu">
                    {scenarioentries}
                </div>
                )
                : (
                null
                )
            }
      </div>
        );
    }
}

export default CampaignMenu;