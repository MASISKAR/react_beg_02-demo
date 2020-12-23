import React, { PureComponent } from 'react';
import { formatDate } from '../../../helpers/utils';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';
import { connect } from 'react-redux';
import { getSingleTask } from '../../../store/actions';

class SingleTask extends PureComponent {
    state = {
        openEditModal: false
    };

    componentDidMount() {
        const taskId = this.props.match.params.id;
        this.props.getSingleTask(taskId);
    }

    componentDidUpdate(prevProps){
        if (!prevProps.editTaskSuccess && this.props.editTaskSuccess) {
            this.setState({
                openEditModal: false
            });
        }
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


    render() {
        const { openEditModal } = this.state;
        const {task} = this.props;
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
                    <h3>No task found !!!</h3>
                }


                {
                    openEditModal &&
                    <EditTaskModal
                        data={task}
                        from = 'single'
                        onSave={this.saveTask}
                        onClose={this.toogleEditModal}
                    />
                }
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        task: state.task,
        editTaskSuccess: state.editTaskSuccess
    };
};

const mapDispatchToProps = {
    getSingleTask
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);