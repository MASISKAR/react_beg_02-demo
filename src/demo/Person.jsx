import React, { Component } from 'react';


class Person extends Component {
    // constructor(props){
    // super(props);
    // this.state = {
    //     name: props.name
    // };
    // }

    state = {
        name: 'Alex Doe'
    };

    render() {
const name = this.props.name;
        return (
            <>
                <div>name from state {this.state.name}</div>
                <div>name from props {name}</div>
            </>
        );
    }
}

export default Person;