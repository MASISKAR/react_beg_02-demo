import request from '../helpers/request';

//action creator
export function getTasks(){
    return (dispatch)=>{
        request('http://localhost:3001/task')
        .then(res =>{
            dispatch({type: 'GET_TASKS_SUCCESS', tasks: res});
        })
        .catch(err =>{
            dispatch({type: 'GET_TASKS_FAILURE', error: err.message});
        });

    }



}