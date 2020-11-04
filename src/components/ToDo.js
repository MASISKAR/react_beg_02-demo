import React, { Component } from 'react';
import Task from './task/Task';
import picture from '../assets/images/pic.png';
import idGenerator from '../helpers/idGenerator';

const inputStyle = {
    border: "1px solid red",
    backgroundColor: '#f60'
};

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
                style ={inputStyle}
                />

                <input 
                type="button" 
                value='Add' 
                onClick = {this.addTask}
                />
                <img src={picture} alt="somepic"/>
                <img src={require('../assets/images/pic.png')} alt="somepic"/>

                <ol>
                
                {tasks.map((task, index) => {
                    // return <li key={index}>{task}</li>
                    // if(index === 2){
                    //     return <Task key={index} data={task} selected/>
                    // }
                    return <Task key={idGenerator()} data={task} selected={index === 2}/>

                })}
                </ol>

            </div>
        );
    };

}

export default ToDo;