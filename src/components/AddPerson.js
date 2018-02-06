import React from 'react';

const AddPerson = (props) => {

   const somethingLikeHandleSubmit =() => {
    props.addNewPerson('Vtíravej Honza')
   }

   return(
      <div>
          <button onClick={somethingLikeHandleSubmit}>Add Person</button>
      </div>
   )
}

export default AddPerson
