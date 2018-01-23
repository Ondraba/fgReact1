import React, { Component } from 'react';

const PeopleCounter = (props) => {

    function peopleCount(){
        return props.peopleInside.length;
    }

   return(
      <div>
          <span style={(peopleCount() > 5) ? styles.red : styles.green}>V budově se nachází: {peopleCount()} osob </span>
      </div>
   )
        
}

const styles = {
    red:{
     color:'red'
    },
    green:{
      color:'green'  
    }
  };

export default PeopleCounter