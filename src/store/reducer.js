import * as actionTypes from './actionTypes';

const defaultState = {
    tasks: [],
    errorMessage: null,
    successMessage: null,
    addTaskSuccess: false,
    loading: false
  };
  
const reducer = (state = defaultState, action) => {
  switch(action.type){

    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        addTaskSuccess: false,
        errorMessage: null,
        successMessage: null,
      }
    }

    case actionTypes.ERROR: {
      return {
        ...state,
        errorMessage: action.error,
      loading: false

      }
    }

    case actionTypes.GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.tasks,
        loading: false
      }
    }


    case actionTypes.ADD_TASK_SUCCESS: {
        const tasks = [...state.tasks, action.task];
      return {
        ...state,
        tasks: tasks,
        loading: false,
        successMessage: 'Task added successfully 🎉!!!',
        addTaskSuccess: true
      }
    }

    case actionTypes.REMOVE_TASK_SUCCESS: {
      const newTasks = state.tasks.filter(task => task._id !== action.taskId);

    return {
      ...state,
      tasks: newTasks,
      loading: false,
      successMessage: 'Task removed successfully 🎉!!!',
    }
  }

    default: return state;
  }

}

export {reducer};