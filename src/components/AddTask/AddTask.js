import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import styles from './addTaskStyle.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';

export default class AddTask extends Component {
constructor(props){
    super(props);

    this.state = {
        title: '',
        description: '',
        date: new Date()
    };

    this.titleRef = React.createRef(null);
}

componentDidMount(){
    this.titleRef.current.focus();
}


    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    };

    //variant 1
/*     handleChange = (event, name) => {
        console.log('name', name)
  
        this.setState({
            [name]: event.target.value
        });
    }; */

    //variant 2
    handleChange = (event) => {
        const {name, value} = event.target;
  
        this.setState({
            [name]: value
        });
    };

    handleDateChange = (date)=>{
        this.setState({
            date
        });
    };

    addTask = () => {
        const { title, description, date } = this.state;
        if (!title) {
            return;
        }

        const task = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
        };

        this.props.onAdd(task);
    };


    render() {
        const { onClose } = this.props;

        return (
                <Modal
                    show={true}
                    onHide={onClose}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl
                            placeholder="Title"
                            name = "title"
                            ref = {this.titleRef}
                            /* onChange={this.handleChange} */
                            /* onChange={(event)=> this.handleChange(event, 'title')} */
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />

                        <textarea 
                        rows="4"
                        className={styles.description}
                        name = "description"
                        placeholder = "Description"
                        onChange={this.handleChange}
                        > 
                        </textarea>

                        <DatePicker 
                        selected={this.state.date} 
                        onChange={this.handleDateChange} 
                        minDate = {new Date()}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.addTask}>
                            Add
                </Button>
                        <Button variant="secondary" onClick={onClose}>
                            Cancel
                </Button>
                    </Modal.Footer>
                </Modal>

        );
    }
}

AddTask.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};