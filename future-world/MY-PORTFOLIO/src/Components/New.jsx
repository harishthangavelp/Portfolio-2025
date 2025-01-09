import React from 'react';
import './New.css';

function New() {
  return (
    <div className="newcontainer">
      <h1>Welcome to My Page</h1>
      <p>This is a sample content to demonstrate alignment using React and CSS.</p>
      <div className="newbutton-group">
        <button className="newbtn">Click Me</button>
        <button className="newbtn">Learn More</button>
      </div>
    </div>
  );
}

export default New;
