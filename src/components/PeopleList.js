import React, { Component } from 'react';

const PeopleList = (props) => {

    function renderThePeople({peopleInside}){
        return peopleInside.map((item, index) =>{
            return (
                <p key={index}>{index + 1}.{item}</p>      
            )
        })
    }

   return(
    <div>
     {renderThePeople(props)}
    </div>
   )
        
}

export default PeopleList