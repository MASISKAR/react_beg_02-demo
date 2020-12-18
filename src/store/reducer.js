
const defaultState = {
    tasks: [],
    error: null
  };
  
const reducer = (state = defaultState, action) => {
  switch(action.type){

    case "GET_TASKS_SUCCESS": {
      return {
        ...state,
        tasks: action.tasks
      }
    }

    case "GET_TASKS_FAILURE": {
        return {
          ...state,
          error: action.error
        }
      }
  
    default: return state;
  }

}

export {reducer};