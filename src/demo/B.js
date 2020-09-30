import React from 'react';

class B extends React.Component {
    state = {
        inputValue: ''
    };

    handleClick = () => {
        const value = this.state.inputValue;
        this.props.onSendValue(value);
        this.setState({
            inputValue: ""
        });
    };

    handleChange = (event) => {

        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
    //  console.log(this.props)
const {inputValue} = this.state;
        return (

            <div>

                <input
                    value={inputValue}
                    type="text"
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >
                    Send
            </button>

            <p>{this.props.name}</p>
            <p>{this.props.count}</p>

            </div>

        );
    }
}

export default B;