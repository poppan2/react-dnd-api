import { useState, useEffect } from 'react';

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({})

  useEffect(()=> {
    // This is where the API call will go
  })

  return (
    <>
      <div>
        <h3>Class Details</h3>
      </div>
    </>
  );
}
 
export default ClassDetails;
