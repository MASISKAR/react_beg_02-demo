import React, { Component } from 'react';
import Task from './Task';

class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: ''
    };

    handleChange = (event)=>{

        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = ()=>{
        const {inputValue} = this.state;

        const tasks = [...this.state.tasks];

        tasks.push(inputValue);

        this.setState({
            tasks: tasks,
            inputValue: ''
        });
    };

    render() {
const {inputValue, tasks} = this.state;

        return (
            <div>
                <input 
                type="text" 
                placeholder='Add new task'
                value = {inputValue}
                onChange={this.handleChange} 
                />

                <input 
                type="button" 
                value='Add' 
                onClick = {this.addTask}
                />

                <ol>
                {tasks.map((task, index) => {
                    // return <li key={index}>{task}</li>
                    return <Task key={index} data={task}/>

                })}
                </ol>

            </div>
        );
    };

}

export default ToDo;