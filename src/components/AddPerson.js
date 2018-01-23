import React, { Component } from 'react';

const AddPerson = (props) => {

   function somethingLikeHandleSubmit(){
    props.addNewPerson('Kopie vtíravýho Pepika')
   }

   return(
      <div>
          <button onClick={somethingLikeHandleSubmit}>Add Person</button>
      </div>
   )
        
}

export default AddPerson