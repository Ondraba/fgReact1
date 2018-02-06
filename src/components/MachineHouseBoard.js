
import React, { Component } from 'react';
import Footer from './Footer';
import PeopleList from './PeopleList';
import AddPerson from './AddPerson';
import PeopleCounter from './PeopleCounter';

class MachineHouseBoard extends Component {
    constructor(props){
        super(props);
        this.state = { building: 'FG Machine House', locality: 'Prague', count: '', isEmpty: false, peopleInside: ['Kuba Trousil','Radek Chroust'] };

        this.addNewPerson = this.addNewPerson.bind(this);
    }

    addNewPerson(person){
        this.setState({peopleInside: [...this.state.peopleInside, person]})
    }

    render(){
        let {building, locality, peopleInside} = this.state;

        return(
         <div>
            <div className="fg-info">
                <p>
                    <b>Budova</b>: {building}
                </p>
                <p>
                    <b>Lokalita</b>: {locality}
                </p>
            </div>
            
            <div>
                <PeopleList peopleInside={peopleInside}/>
            </div>

            <div>
                <AddPerson addNewPerson={this.addNewPerson}/>
            </div>

            <div>
                <PeopleCounter peopleInside={peopleInside}/>
            </div>

            <div>
                <Footer building={building}/>
            </div>

        </div>
        )
    }

}

export default MachineHouseBoard
