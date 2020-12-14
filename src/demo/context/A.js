import React, { Component } from 'react';
import B from './B';
import C from './C';
import { BContext } from './BContext';

class A extends Component {
state = {
val: 'Hello'
};


    render() {

        return (
            <div>
            <h3>A component</h3>
            <BContext.Provider value={{
                counter: 15,
                value: this.state.val,
                onSendValue: (value)=> {
    
                    this.setState({
                        val: value
                    });
                }
            }}>
            <B />
            <C />
            </BContext.Provider>

            </div>
        );
    }
}

export default A;