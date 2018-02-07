import React from 'react';

const AddPerson = ({addNewPerson}) => {
   return(
      <div>
          <button onClick={()=>addNewPerson('Vtíravej Honza')}>Add Person</button>
      </div>
   )
}

export default AddPerson
