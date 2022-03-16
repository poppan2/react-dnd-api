import { useState } from 'react'

const ClassList = (props) => {
  const [results, setResults] = useState(['Paladin', 'Bard', 'Rogue'])
  return (
    <>
      <div>
        <h3>Class List</h3>
        <div className='icon-container'>
          {results.map((classTitle) => (
            <div id="classDiv" key={classTitle}>
              <img 
                style={{ width: "100px", height: "100px" }}
                src={`/images/${classTitle}.svg`} 
                alt="class-logo"
              />
              {classTitle}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default ClassList;