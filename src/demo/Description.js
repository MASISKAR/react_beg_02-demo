import React, {Component} from 'react';

class Description extends Component {

    render(){
        return(
            <p>Description: {this.props.text}</p>
        );
    }
}

export default Description;