import React, { Component } from 'react';
import ChangeCounter from './ChangeCounter';
import ShowCounter from './ShowCounter';
import Message from './Message';
import {connect} from 'react-redux';

class Counter extends Component {


    render() {

        return (
            <div>
            <h2>{this.props.text}</h2>
               <ShowCounter />
               <ChangeCounter />
               <Message />
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
return {
    text: state.text
}
};

export default connect(mapStateToProps, null)(Counter);