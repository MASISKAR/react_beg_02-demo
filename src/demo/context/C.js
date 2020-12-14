import React, { Component } from 'react';
import { BContext } from './BContext';

class C extends Component {

    render() {

        return (
            <BContext.Consumer>
                {
                    (context) => {
                        console.log('C context', context)
                        return (<div>
                            <h3>C component {context.value}</h3>
                        </div>);
                    }
                }


            </BContext.Consumer>

        );
    }
}

export default C;