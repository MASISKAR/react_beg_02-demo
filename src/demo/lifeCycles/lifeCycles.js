import React, { Component } from 'react';
import Hooks from './hooks';

export default class LifeCycle extends Component{
constructor(props){
    super(props);

    this.state = {
        counter: 0
    }

    console.log('LifeCycle constructor');
}

componentDidMount(){
    console.log('LifeCycle componentDidMount');  
}

componentDidUpdate(prevProps, prevState){
    console.log('LifeCycle componentDidUpdate');  

}

// shouldComponentUpdate(prevProps, prevState){
//     console.log('LifeCycle shouldComponentUpdate'); 

//     if(prevState.counter > 5){
//         return false;
//     }

//     return true;
// }

componentWillUnmount(){
    console.log('LifeCycle componentWillUnmount'); 
}


increment = ()=>{
    this.setState({
        counter: this.state.counter + 1
    });
};



    render(){
    console.log('LifeCycle render');

        return(
            <div>
            <h3>{this.state.counter}</h3>
            
            <button
            onClick = {this.increment}
            >
            Click me
            </button>

            <Hooks />
            </div>
        )
    }
}