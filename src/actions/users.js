import {
    CREATE_USER,
    CLEAR_LOGIN,
    LOGIN_USER,
    INSERT_TASK,
    INSERT_TASK_CLEAR,
    FIND_USER,
    DISPLAY_TASK,
    FIND_TASK,
    UPDATE_TASK,
    UPDATE_TASK_CLEAR
  } from "./types";
  
  import UserService from "../services/UserService";
  
  export const createUser = (data) => async (dispatch) => {
    try {
      const res = await UserService.create(data);
  
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveLogin = (data) => async (dispatch) => {
    console.log("retrieveLogin",data)
    try {
      const res = await UserService.login(data);
      console.log("--->actions-->",res.data)
      dispatch({
        type: LOGIN_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const inserttask = (data) => async (dispatch) => {
    console.log("retrieveLogin",data)
    try {
      const res = await UserService.addTask(data);
      console.log("--->actionsinserttask-->",res.data)
      dispatch({
        type: INSERT_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findUserData = (email) => async (dispatch) => {
    try {
      const res = await UserService.findUser(email);
      localStorage.setItem("userid",res.data?.id)
      localStorage.setItem("uname",res.data?.name)
      dispatch({
        type: FIND_USER,
        payload: res.data,
      });
      dispatch(displayTask());
    } catch (err) {
      console.log(err);
    }
  };


  export const displayTask = () => async (dispatch) => {
    const id = localStorage.getItem('userid');
    try {
      const res = await UserService.displayTaskApi(id);
  
      dispatch({
        type: DISPLAY_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const findTask = ({id,setTitle,setDesc,setHours}) => async (dispatch) => {
    try {
      const res = await UserService.findtaskApi(id);
        setTitle(res.data.title)
        setDesc(res.data.desc)
        setHours(res.data.hours)
      dispatch({
        type: FIND_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteTask = (id) => async (dispatch) => {
    try {
      const res = await UserService.deleteTaskApi(id);
      dispatch({
        type: FIND_TASK,
        payload: res.data,
      });
      dispatch(displayTask());
    } catch (err) {
      console.log(err);
    }
  };

  export const updateTask = ({id,data}) => async (dispatch) => {
    try {
      const res = await UserService.taskUpdateApi({id,data});
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const clearUser = () => async (dispatch) => {
      dispatch({
        type: CLEAR_LOGIN,
        payload: {},
      });
   
  };

  export const clearTask = () => async (dispatch) => {
    dispatch({
      type: INSERT_TASK_CLEAR,
      payload: {},
    });
};

export const clearTUpdate = () => async (dispatch) => {
  dispatch({
    type: UPDATE_TASK_CLEAR,
    payload: {},
  });
};