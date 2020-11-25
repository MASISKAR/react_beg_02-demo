import React, {Component} from 'react';

class Name extends Component {

    render(){
        return(
            <p>Name: {this.props.text}</p>
        );
    }
}

export default Name;