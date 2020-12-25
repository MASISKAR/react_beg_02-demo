import request from '../helpers/request';
import * as actionTypes from './actionTypes';
// import {history} from '../history';


//action creator
export function getTasks(data={}){
    let url = 'http://localhost:3001/task';

    let query = '?';
    for(let key in data){
        let value = data[key];
        query = `${query}${key}=${value}&`;
    }

    if(query==='?'){
        query = '';
    }

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(url+query)
        .then(res =>{
            dispatch({type: actionTypes.GET_TASKS_SUCCESS, tasks: res});
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}

export function getSingleTask(taskId){
    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`http://localhost:3001/task/${taskId}`)
        .then(res =>{
            dispatch({type: actionTypes.GET_SINGLE_TASK_SUCCESS, task: res});
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}

export function addTask(data){
    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request('http://localhost:3001/task', 'POST', data)
        .then(res =>{
            dispatch({type: actionTypes.ADD_TASK_SUCCESS, task: res});
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}


export function removeTask(taskId, from="tasks", redirect){

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`http://localhost:3001/task/${taskId}`, 'DELETE')
        .then(res =>{
            dispatch({type: actionTypes.REMOVE_TASK_SUCCESS, taskId, from});
            if(from==="single"){
                redirect("/");
            }
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}

export function removeSelected(taskIds){
    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`http://localhost:3001/task`, 'PATCH', {tasks: taskIds})
        .then(() =>{
            dispatch({type: actionTypes.REMOVE_SELECTED_TASKS_SUCCESS, taskIds});
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}


export function editTask(data, from){
    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`http://localhost:3001/task/${data._id}`, 'PUT', data)
        .then((editedTask) =>{
            dispatch({type: actionTypes.EDIT_TASK_SUCCESS, task: editedTask, from});
        })
        .catch(err =>{
            dispatch({type: actionTypes.ERROR, error: err.message});
        });

    }
}