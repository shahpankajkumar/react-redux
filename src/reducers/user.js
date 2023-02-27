import {
  CREATE_USER,
  CLEAR_LOGIN,
  LOGIN_USER,
  INSERT_TASK,
  FIND_USER,
  DISPLAY_TASK,
  INSERT_TASK_CLEAR,
  FIND_TASK,
  UPDATE_TASK,
  UPDATE_TASK_CLEAR
} from "../actions/types";

const initialState = {
  user: {},
  task: {},
  login:{},
  find:{},
  display:{},
  findTask:{},
  taskUpdate:{}
}

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      let newState = { ...state };
      newState.user = payload;
      return { ...newState };

      case CLEAR_LOGIN:
        let clearState = { ...state };
        clearState.login = payload;
        clearState.user = payload;
        clearState.task = payload;
        clearState.find = payload;
        clearState.findTask = payload;
        clearState.display = payload;
        return { ...clearState };

    case LOGIN_USER:
      let loginState = { ...state };
      loginState.login = payload;
      return { ...loginState };

    case INSERT_TASK:
      let newTask = { ...state };
      newTask.task = payload;
      return { ...newTask };

    case INSERT_TASK_CLEAR:
      let newTasknew = { ...state };
      newTasknew.task = payload;
      return { ...newTasknew };

    case FIND_USER:
      let newFind = { ...state };
      newFind.find = payload;
      return { ...newFind };

      case FIND_TASK:
        let newFindTask = { ...state };
        newFindTask.findTask = payload;
        return { ...newFindTask };

    case DISPLAY_TASK:
      let newDispaly = { ...state };
      newDispaly.display = payload;
      return { ...newDispaly };

      case UPDATE_TASK:
        let newUpdateTask = { ...state };
        newUpdateTask.taskUpdate = payload;
        return { ...newUpdateTask };

      case UPDATE_TASK_CLEAR:
        let newTaskClear = { ...state };
        newTaskClear.taskUpdate = payload;
        return { ...newTaskClear };

    default:
      return state;
  }
};

export default userReducer;