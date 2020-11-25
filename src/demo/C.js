import React, { PureComponent, Component } from 'react';
import D from './D';

class C extends Component {
constructor(props){
    super(props);

    this.state = {
        
    };

    console.log('C constructor');
}


componentDidMount(){
    console.log('C componentDidMount');
}

componentDidUpdate(prevProps, prevState){
    console.log('C componentDidUpdate');
    // console.log('prevProps', prevProps);
    // console.log('prevState', prevState);

    // console.log('this.props', this.props);
    // console.log('this.state', this.state);
}

/* shouldComponentUpdate(prevProps, prevState){
console.log('C shouldComponentUpdate');
if(prevProps.data !== this.props.data){
    return true;
}
    
return false;
} */

componentWillUnmount(){
    console.log('C componentWillUnmount');
}

    render() {
        console.log('C render');

        return (
            <>
            <div>C component</div>
        <p>{this.props.data}</p>
        <D />
            </>
        );
    }

}

export default C;