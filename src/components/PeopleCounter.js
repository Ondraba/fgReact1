
import React from 'react';

const PeopleCounter = ({peopleInside}) => {
   const peopleCount = peopleInside.length;
   return(
      <div>
          <span style={(peopleCount > 5) ? styles.red : styles.green}>V budově se nachází: {peopleCount} osob </span>
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
