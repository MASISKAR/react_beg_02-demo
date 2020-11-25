import React, { PureComponent } from 'react';
import Task from '../Task/Task';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AddTask from '../AddTask/AddTask';
import Confirm from '../Confirm';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import styles from './todoStyle.module.css';

class ToDo extends PureComponent {
    state = {
        tasks: [],
        selectedTasks: new Set(),
        showConfirm: false,
        editTask: null,
        openNewTaskModal: false
    };

    componentDidMount() {
        fetch("http://localhost:3001/task", {
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
                    tasks: response
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });
    }





    addTask = (data) => {
        const body = JSON.stringify(data);

        fetch("http://localhost:3001/task", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        })
            .then((res) => res.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }

                const tasks = [response, ...this.state.tasks];
                this.setState({
                    tasks: tasks,
                    openNewTaskModal: false
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });

    };

    removeTask = (taskId) => {

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

                const newTasks = this.state.tasks.filter(task => task._id !== taskId);
                this.setState({
                    tasks: newTasks
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });


    };

    handleCheck = (taskId) => {
        const selectedTasks = new Set(this.state.selectedTasks);
        if (selectedTasks.has(taskId)) {
            selectedTasks.delete(taskId);
        }
        else {
            selectedTasks.add(taskId);
        }

        this.setState({
            selectedTasks
        });

    };

    removeSelected = () => {

        const body = {
            tasks: [...this.state.selectedTasks]
        };
        fetch(`http://localhost:3001/task`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then(response => {
                if (response.error) {
                    throw response.error;
                }

                let tasks = [...this.state.tasks];

                this.state.selectedTasks.forEach((id) => {
                    tasks = tasks.filter((task) => task._id !== id);
                });

                this.setState({
                    tasks,
                    selectedTasks: new Set(),
                    showConfirm: false
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });

    };

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    }

    toogleEditModal = (task) => {
        this.setState({
            editTask: task
        });
    }

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

                const tasks = [...this.state.tasks];

                const foundTaskIndex = tasks.findIndex((task) => task._id === editedTask._id);
                tasks[foundTaskIndex] = response;

                this.setState({
                    tasks: tasks,
                    editTask: null
                });

            })
            .catch((error) => {
                console.log("ToDo -> error", error)
            });

    };

    toggleNewTaskModal = ()=>{
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        });
    }

    render() {
        const { tasks, selectedTasks, showConfirm, editTask, openNewTaskModal } = this.state;
        const tasksArray = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        disabled={!!selectedTasks.size}
                        onEdit={this.toogleEditModal}
                    />
                </Col>
            )
        });


        return (
            <div className={styles.toDo}>
                <Container>
                    <Row className='justify-content-center text-center'>
                        <Col sm={10} xs={12} md={8} lg={6}>
                            <Button
                                variant="outline-primary"
                                onClick={this.toggleNewTaskModal}
                                disabled={!!selectedTasks.size}
                            >
                                Add new task
                            </Button>
                        </Col>

                    </Row>

                    <Row>
                        {tasksArray}
                    </Row>

                    <Row className='justify-content-center'>
                        <Col xs={4} >
                            <Button
                                variant="outline-danger"
                                onClick={this.toggleConfirm}
                                disabled={!selectedTasks.size}
                            >
                                Remove selected
                        </Button>
                        </Col>
                    </Row>
                </Container>

                {
                    showConfirm &&
                    <Confirm
                        onSubmit={this.removeSelected}
                        onClose={this.toggleConfirm}
                        count={selectedTasks.size}
                    />
                }
                {
                    !!editTask &&
                    <EditTaskModal
                        data={editTask}
                        onSave={this.saveTask}
                        onClose={() => this.toogleEditModal(null)}
                    />
                }

                { openNewTaskModal &&
                    <AddTask
                        onAdd={this.addTask}
                        onClose = {this.toggleNewTaskModal}
                    />
                }


            </div>
        );
    };

}

export default ToDo;