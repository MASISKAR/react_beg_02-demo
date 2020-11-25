import React, { Component } from 'react';
import B from './B';

class A extends Component {
constructor(props){
    super(props);

    this.state = {
        counter: 0,
        text: '',
        show: true
    };

    console.log('A constructor');
}


componentDidMount(){
    console.log('A componentDidMount');
}

componentDidUpdate(prevProps, prevState){
    console.log('A componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    console.log('this.props', this.props);
    console.log('this.state', this.state);
   
    if(prevState.counter %2=== 0 && this.state.counter>4){
        console.log('test');
        this.setState({
            text: 'This is a text'
        });
    }
}

shouldComponentUpdate(prevProps, prevState){
console.log('A shouldComponentUpdate');

    if(prevState.counter >10){
        return false;
    }
    
        return true;
    
}


    handleClick = ()=>{
        this.setState({
            counter: this.state.counter +1
        });
    };

    toggle = ()=>{
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        console.log('A render');

        return (
            <>
            <div>{this.state.counter}</div>
            <button
             onClick = {this.handleClick}
            >
            +
            </button>
            <button
             onClick = {this.toggle}
            >
            Toggle
            </button>
            
            {this.state.show && <B data={this.state.text}/>}
            </>
        );
    }

}

export default A;