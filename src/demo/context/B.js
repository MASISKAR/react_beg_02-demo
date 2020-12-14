import React, { Component } from 'react';
import { BContext } from './BContext';


class B extends Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    // handleClick = () => {
    //     console.log(this.state.value);
    //     this.setState({
    //         value: ""
    //     });
    // }

    render() {

        return (
            <div>
                <BContext.Consumer>
                    {
                        (context) => {
                        console.log('context', context)

                            return (
                                <>
                                    <h3>B component</h3>
                                    <input
                                        type='text'
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                    <button
                                        onClick={()=>{
                                            context.onSendValue(this.state.value);
                                            this.setState({
                                                value: ""
                                            });
                                        }}
                                    >
                                        Click me
                                    </button>
                                </>

                            )

                        }
                    }
                </BContext.Consumer>

            </div>
        );
    }
}

export default B;