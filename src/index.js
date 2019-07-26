// -- IMPORT THE REACT AND REACTDOM LIBRARIES
import React from 'react';
import ReactDOM from 'react-dom';

// -- CREATE A REACT COMPONENT
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

// -- TAKE THE REACT COMPONENT AND SHOW IT ON THE SCREEN
ReactDOM.render(<App />, document.querySelector('#root'));
