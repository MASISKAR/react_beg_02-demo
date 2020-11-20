import React, {Component} from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import styles from './addTaskStyle.module.css';
import PropTypes from 'prop-types';

export default class AddTask extends Component {

    state = {
        inputValue: ''
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = () => {
        const { inputValue } = this.state;
        if (!inputValue) {
            return;
        }

        const task = {
            title: inputValue
        };

        this.props.onAdd(task);

        this.setState({
            inputValue: ''
        });
    };


//variant 1
    // static propTypes = {
    //     disabled: PropTypes.bool,
    //     onAdd: PropTypes.func.isRequired
    // };

    render(){
        const {inputValue} = this.state;
        const {disabled} = this.props;

        return(
            <InputGroup className={styles.input}>
                                <FormControl
                                    placeholder="Input new task"
                                    aria-label="Input new task"
                                    aria-describedby="basic-addon2"
                                    onChange={this.handleInputChange}
                                    onKeyDown={this.handleKeyDown}
                                    value={inputValue}
                                    disabled = {disabled}
                                />
                                <InputGroup.Append>
                                    <Button
                                        variant="outline-primary"
                                        onClick={this.addTask}
                                        disabled={disabled}
                                    >
                                        Add
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
        );
    }
}

//variant 2
AddTask.propTypes = {
    disabled: PropTypes.bool,
    onAdd: PropTypes.func.isRequired
};