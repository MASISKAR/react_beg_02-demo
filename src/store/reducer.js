import * as actionTypes from './actionTypes';

const defaultState = {
  tasks: [],
  task: null,
  errorMessage: null,
  successMessage: null,
  addTaskSuccess: false,
  editTaskSuccess: false,
  removeTasksSuccess: false,
  removeTaskSuccess: false,
  loading: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true,
        addTaskSuccess: false,
        removeTasksSuccess: false,
        removeTaskSuccess: false,
        editTaskSuccess: false,
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
      if(action.from==="single"){
        return {
          ...state,
          task: null,
          loading: false,
          removeTaskSuccess: true,
          successMessage: 'Task removed successfully 🎉!!!',
        }
      }
      else {
         const newTasks = state.tasks.filter(task => task._id !== action.taskId);

      return {
        ...state,
        tasks: newTasks,
        loading: false,
        successMessage: 'Task removed successfully 🎉!!!',
      }
      }
     
    }

    case actionTypes.REMOVE_SELECTED_TASKS_SUCCESS: {
      let tasks = [...state.tasks];
      action.taskIds.forEach((id) => {
        tasks = tasks.filter((task) => task._id !== id);
      });


      return {
        ...state,
        tasks: tasks,
        loading: false,
        removeTasksSuccess: true,
        successMessage: 'Tasks removed successfully 🎉!!!',
      }
    }

    case actionTypes.EDIT_TASK_SUCCESS: {
      
      if (action.from === 'single') {
        return {
          ...state,
          task: action.task,
          loading: false,
          editTaskSuccess: true,
          successMessage: 'Task edited successfully 🎉!!!',
        }
      }
      else {
        const tasks = [...state.tasks];

        const foundTaskIndex = tasks.findIndex((task) => task._id === action.task._id);
        tasks[foundTaskIndex] = action.task;
        return {
          ...state,
          tasks: tasks,
          loading: false,
          editTaskSuccess: true,
          successMessage: 'Task edited successfully 🎉!!!',
        }
      }



    }

    case actionTypes.GET_SINGLE_TASK_SUCCESS: {
      return {
        ...state,
        task: action.task,
        loading: false
      }
    }

    default: return state;
  }

}

export { reducer };