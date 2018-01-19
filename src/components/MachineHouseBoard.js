
import React, { Component } from 'react';
import Footer from './Footer';

class MachineHouseBoard extends Component {
    constructor(props){
        super(props);
        this.state = { building: 'FG Machine House', locality: 'Prague', count: '', isEmpty: false, peopleInside: ['Kuba Trousil','Kuba Kosar'] };
    }

    addPerson(){

    }

    renderTheBoard({building, locality}){
        return (
            <div>
                <p>
                   <b>Budova</b>: {building}   
                </p>
                <p>
                  <b> Lokalita</b>: {locality}   
                </p>
            </div>
        )
    }

    renderThePeople({peopleInside}){
        return peopleInside.map((item, index) =>{
            return (
                <p key={item.index}>{index + 1}.{item}</p>      
            )
        })
    }

    render(){
        return(
         <div>
             <div>
              {this.renderTheBoard(this.state)}
             </div>
             <div>
                 {this.renderThePeople(this.state)}
             </div>
             <div>
                 <Footer building={this.state.building}/>
             </div>
        </div>
        
        )   
    }
}

export default MachineHouseBoard

