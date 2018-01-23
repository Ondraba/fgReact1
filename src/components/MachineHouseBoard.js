
import React, { Component } from 'react';
import Footer from './Footer';
import PeopleList from './PeopleList';
import AddPerson from './AddPerson';
import PeopleCounter from './PeopleCounter';

class MachineHouseBoard extends Component {
    constructor(props){
        super(props);
        this.state = { building: 'FG Machine House', locality: 'Prague', count: '', isEmpty: false, peopleInside: ['Kuba Trousil','Kuba Kosar'] };

        this.addNewPerson = this.addNewPerson.bind(this);
    }

    addNewPerson(person){
        this.setState({peopleInside: [...this.state.peopleInside, person]})
    }

    renderTheBoard({building, locality}){
        return (
            <div>
                <p>
                   <b>Budova</b>: {building}   
                </p>
                <p>
                  <b>Lokalita</b>: {locality}   
                </p>
            </div>
        )
    }

    render(){
        return(
         <div>
             <div>
              {this.renderTheBoard(this.state)}
             </div>
             <div>
                 <PeopleList peopleInside={this.state.peopleInside}/>
             </div>
             <div>
                 <AddPerson addNewPerson={this.addNewPerson}/>
             </div>
             <div>
                 <PeopleCounter peopleInside={this.state.peopleInside}/>
             </div>
             <div>
                 <Footer building={this.state.building}/>
             </div>
        </div>
        )   
    }

}

export default MachineHouseBoard

