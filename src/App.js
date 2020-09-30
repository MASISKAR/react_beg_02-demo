import React from 'react';
import './App.css';
// import './demo/lesson-5';
import Product from './demo/Product';
// import Counter from './demo/Counter';
import A from './demo/A';


function App() {
  // const surname = 'Smith';

  return (
    <div className="App">
    <Product 
    name={'banabas'} 
    price='1$'
    rate = {490}
    description='Fresh bananas from Ecuador'
    />

{/*    <Counter 
   defaultValue ={15}
   name='Counter'
   /> */}
   <A/>
    </div>

  );
}

export default App;
