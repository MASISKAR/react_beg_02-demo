import React, {Component} from 'react';
import {Button, Modal, FormControl} from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './editTaskModalStyle.module.css';

export default class EditTaskModal extends Component{
  constructor(props){
    super(props);
 const {date} = props.data;

    this.state = {
      ...props.data,
      date: date ? new Date(date): new Date()
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
        [name]: value
    });
};

  handleSave = () =>{
    const {title, date} = this.state;

    if(!title){
      return;
    }

    const editedTask = {
      ...this.state, 
      date: date.toISOString().slice(0, 10)
    };

    this.props.onSave(editedTask);
  }

  handleDateChange = (date)=>{
    this.setState({
        date
    });
};

  render() {
    const { onClose } = this.props;
    const { title, description, date } = this.state;

    return (
            <Modal
                show={true}
                onHide={onClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl
                        placeholder="Title"
                        name = "title"
                        value = {title}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />

                    <textarea 
                    rows="4"
                    className={styles.description}
                    name = "description"
                    placeholder = "Description"
                    value = {description}
                    onChange={this.handleChange}
                    > 
                    </textarea>

                    <DatePicker 
                    selected={date} 
                    onChange={this.handleDateChange} 
                    startDate = {new Date()}
                    minDate = {new Date()}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleSave}>
                        Save
            </Button>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
            </Button>
                </Modal.Footer>
            </Modal>

    );
}
}

EditTaskModal.propTypes = {
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};
