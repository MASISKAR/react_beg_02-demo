import React, { PureComponent } from 'react';
import { formatDate } from '../../../helpers/utils';
import Spinner from '../../Spinner/Spinner';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';

export default class SingleTask extends PureComponent {
    state = {
        task: null,
        openEditModal: false
    };

    componentDidMount() {
        const taskId = this.props.match.params.id;

        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }

                this.setState({
                    task: response
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });
    }

    onRemove = () => {
        const taskId = this.state.task._id;

        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then(response => {

                if (response.error) {
                    throw response.error;
                }

                this.props.history.push('/');
            })
            .catch((error) => {
                console.log("ToDo -> error", error);
            });
    };

    toogleEditModal = () => {
        this.setState({
            openEditModal: !this.state.openEditModal
        });
    };

    saveTask = (editedTask) => {

        fetch(`http://localhost:3001/task/${editedTask._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
        })
            .then((res) => res.json())
            .then(response => {

                if (response.error) {
                    throw response.error;
                }

                this.setState({
                    task: response,
                    openEditModal: false
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });

    };

    render() {
        const { task, openEditModal } = this.state;
        return (
            <>
                {!!task ?
                    <div>
                        <h2>{task.title}</h2>
                        <p>Description: {task.description}</p>
                        <p>Date: {formatDate(task.date)}</p>
                        <p>Created at: {formatDate(task.created_at)}</p>

                        <Button
                            variant="warning"
                            // className={styles.actionButton}
                            onClick={this.toogleEditModal}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>

                        <Button
                            variant="danger"
                            // className={styles.actionButton}
                            onClick={this.onRemove}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>


                    </div> :
                    <Spinner />}


                {
                    openEditModal &&
                    <EditTaskModal
                        data={task}
                        onSave={this.saveTask}
                        onClose={this.toogleEditModal}
                    />
                }
            </>
        );
    }

}