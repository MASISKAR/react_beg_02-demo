import React from 'react';
import './App.css';
// import './demo/lesson-5';
import Product from './demo/Product';
import Counter from './demo/Counter';


function App() {
  // const surname = 'Smith';

  return (
    <div className="App">
    <Product 
    name={'banabas'} 
    price='1$'
    description='Fresh bananas from Ecuador'
    />

   <Counter 
   defaultValue ={15}
   name='Counter'
   />
    </div>

  );
}

export default App;
