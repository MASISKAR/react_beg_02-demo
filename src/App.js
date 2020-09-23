import React from 'react';
import './App.css';
// import './demo/example';

function Name(props) {
  // console.log(props)

  return (
    <span className='surname'>
      {props.text}
    </span>
  );
}

function Surname(props) {
  return (
    <span className='surname'>
      {props.text}
    </span>
  );
}

const Greeting = () => (
    <div>
      Hello, my name is
      <Name text='John'/>
      <Surname text='Doe'/>
    </div>
  );



function App() {
  const surname = 'Smith';

  return (
    <div className="App">
      <h3>Hello, I am</h3>
      <Name text='John' a='fdfgd' c='sdfsf' className='block' />
      <Surname text={surname} />

      <h3>Hello, I am</h3>
      <Name text='Alex' />
      <Surname text='Doe' />

      <h3>Hello, I am</h3>
      <Name text='Bill' />
      <Surname text='Gates' />


    <Greeting />

    </div>

  );
}

export default App;
