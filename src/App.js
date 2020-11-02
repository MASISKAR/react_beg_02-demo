import React from 'react';
import './App.css';
// import './demo/lesson-5';
// import Product from './demo/Product';
// import Counter from './demo/Counter';
import ToDo from './components/ToDo';


function App() {
  // const surname = 'Smith';

  return (
    <div className="App">
{/*     <Product 
    name={'banabas'} 
    price='1$'
    rate = {490}
    description='Fresh bananas from Ecuador'
    /> */}

{/*    <Counter 
   defaultValue ={15}
   name='Counter'
   /> */}

   {/* <A text='Hello!' initialCount = {0}/> */}

   <ToDo />
    </div>

  );
}

export default App;
