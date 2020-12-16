import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShowCounter extends Component {

    render() {
       const {value} = this.props;
       console.log('this.props', this.props)

        return (
                <p>{value}</p>

        );
    }
}

const mapStateToProps = (state)=>{
    return {
        value: state.count,
    };
};

const mapDispatchToProps = (dispatch)=>{

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCounter);