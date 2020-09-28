import React, { Component } from 'react';


class Counter extends Component {

    //don't use it
    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    constructor(props) {
        super(props);
        this.state = {
            count: props.defaultValue
        };

    }

    // state = {
    //     count: 0,
    //     value: 45
    // };

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
       const {count} = this.state;
       const {name} = this.props;

        return (
            <div>
                <p>{name} {count}</p>
                <button
                    onClick={this.handleClick}
                >
                    Click me
            </button>
            </div>
        );
    }
}

export default Counter;