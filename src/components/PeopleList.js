import React from 'react';

const PeopleList = ({peopleInside}) => {
   return(
    <div>
     {peopleInside.map((item, index) => <p key={index}>{index + 1}.{item}</p>)} 
    </div>
   )
}
export default PeopleList
