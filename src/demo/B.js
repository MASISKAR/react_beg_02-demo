import React, { Component } from 'react';
import C from './C';

class B extends Component {
constructor(props){
    super(props);

    this.state = {
        
    };

    console.log('B constructor');
}


componentDidMount(){
    console.log('B componentDidMount');
}

componentDidUpdate(prevProps, prevState){
    console.log('B componentDidUpdate');
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);

    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
}

/* shouldComponentUpdate(prevProps, prevState){
console.log('B shouldComponentUpdate');
if(prevProps.data !== this.props.data){
    return true;
}
    
return false;
} */

componentWillUnmount(){
    console.log('B componentWillUnmount');
}

    render() {
        console.log('B render');

        return (
            <>
            <div>B component</div>
        <p>{this.props.data}</p>
        <C />
            </>
        );
    }

}

export default B;