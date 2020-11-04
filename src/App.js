import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './demo/lesson-5';
// import Product from './demo/Product';
// import Counter from './demo/Counter';
// import ToDo from './components/ToDo';
import BootstrapDemo from './demo/BootstrapDemo';



function App() {
  // const surname = 'Smith';

  return (
    <div className="App block container">
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

  {/*  <ToDo /> */}

   <BootstrapDemo />
    </div>

  );
}

export default App;
