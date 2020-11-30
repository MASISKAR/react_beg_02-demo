import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './demo/classes';
// import Product from './demo/Product';
// import Counter from './demo/Counter';
import ToDo from './components/ToDo/ToDo';
// import './demo/functional';
// import BootstrapDemo from './demo/BootstrapDemo';
import HOC from './demo/HOC';
import Flex from './demo/flex';
import Block from './demo/Block';

function App() {
  const blocks = [];
  for(let i=1; i<=50; i++){
      blocks.push(
          <Block
           key = {i}
           number={i}
           /> 
           
      );
  }
  return (
    <div className="App">

   <HOC date={new Date()} number ={15}> 
   <h1><span>Hello, I am a</span> Higher order Component!</h1>
    <p> dss sd sd f sdf sd f sd </p>
    gfdgdgdgd

   <ToDo />

   </HOC>

   <Flex className={'wrapper'}>
    {blocks}
   </Flex>

   <Flex>
   <div>150000</div>
   <div>150000</div>
   <div>150000</div>
  </Flex>

    </div>

  );
}

export default App;
