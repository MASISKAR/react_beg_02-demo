import React, { PureComponent } from 'react';
import Task from '../task/Task';
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
        editTask: null
    };

componentDidMount(){
    fetch("http://localhost:3001/task", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((res)=> res.json())
        .then(response => {
            if(response.error){
                throw response.error;
            }
        
        this.setState({
            tasks: response
        });

        })
        .catch((error)=>{
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
        .then((res)=> res.json())
        .then(response => {
            if(response.error){
                throw response.error;
            }

         const tasks = [response, ...this.state.tasks];
        this.setState({
            tasks: tasks
        });

        })
        .catch((error)=>{
        console.log("ToDo -> error", error)
        });

    };

    removeTask = (taskId) => {
        const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks: newTasks
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
        let tasks = [...this.state.tasks];

        this.state.selectedTasks.forEach((id) => {
            tasks = tasks.filter((task) => task._id !== id);
        });

        this.setState({
            tasks,
            selectedTasks: new Set(),
            showConfirm: false
        });

    };

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    }

    toogleEditModal = (task)=>{
        this.setState({
            editTask: task
        });
    }

    saveTask = (editedTask)=>{
        const tasks = [...this.state.tasks];

        const foundTaskIndex = tasks.findIndex((task)=> task._id === editedTask._id);
        tasks[foundTaskIndex] = editedTask;

        this.setState({
            tasks: tasks,
            editTask: null
        });

    };

    render() {
        const { tasks, selectedTasks, showConfirm, editTask } = this.state;
        const tasksArray = tasks.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        disabled={!!selectedTasks.size}
                        onEdit = {this.toogleEditModal}
                    />
                </Col>
            )
        });


        return (
            <div className={styles.toDo}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col sm={10} xs={12} md={8} lg={6}>
                            <AddTask
                                onAdd={this.addTask}
                                disabled={!!selectedTasks.size}
                            />
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
                    data = {editTask}
                    onSave = {this.saveTask}
                    onClose = {()=> this.toogleEditModal(null)}
                    />
                }


            </div>
        );
    };

}

export default ToDo;