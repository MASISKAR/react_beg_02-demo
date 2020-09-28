import React, {Component} from 'react';

class Price extends Component {

    render(){
        return(
            <p>Price: {this.props.text}</p>
        );
    }
}

export default Price;