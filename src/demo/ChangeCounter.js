import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChangeCounter extends Component {

    render() {
      
        return (
            <div>
                
                <button
                    onClick={()=> this.props.onChangeValue(-1)}
                >
                    -
            </button>
            <button
            onClick={()=> this.props.onChangeValue(1)}
        >
            +
    </button>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>{

    return {
        onChangeValue: (val)=>{
            // console.log('val', val)
            //action
            dispatch({type: 'CHANGE_VALUE', value: val});
        }
    };
};

export default connect(null, mapDispatchToProps)(ChangeCounter);