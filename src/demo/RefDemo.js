import React, { Component, createRef } from 'react';

class Test extends Component{

    render(){
        return(
            <div></div>
        )
    }
}


export default class RefDemo extends Component {
constructor(props){
    super(props);

    this.inputRef = createRef(null);
    this.state = {
        val1: '',
    };
}

handleChange = (event)=>{
this.setState({
    val1: event.target.value
});
};

handelClick = ()=>{
    console.log('input 1', this.state.val1);
    console.log('input 2', this.inputRef.current.value);
    this.inputRef.current.value = "";

    this.setState({
        val1: ""
    });

    // console.log(this.inputRef.current.offsetHeight);
}

    render() {
        console.log('render', this.inputRef);
        return (
            <div>

                <input 
                type='text'
                value={this.state.val1}
                onChange={this.handleChange}
                placeholder='input 1'
                />

                <input 
                type='text'
                placeholder='input 2'
                ref = {this.inputRef}
                />

                <button
                onClick = {this.handelClick}
                >
                Print values
                </button>

                <button
                // onClick = {this.handelClick}
                >
                focus
                </button>
            </div>
        );
    }
}