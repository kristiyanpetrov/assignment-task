import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
    marginTop: '10px'
  };

  return (
     <div className="UserInput">
       <input type="text"
              style={inputStyle}
              value={props.currentName}
              onChange={props.changed}/>
     </div>
  )
};

export default userInput;
