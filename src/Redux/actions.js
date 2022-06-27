import axios from "axios";
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./action.types";



export const gettodos =()=>(dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  axios
    .get("http://localhost:8080/todos")
    .then((res) => dispatch({ type: GET_TODOS_SUCCESS, payload: res.data }))
    .catch(() => {
      dispatch({ type: GET_TODOS_FAILURE });
    });
};

export const addTodo = (payload) => (dispatch) => {
  dispatch({ type: ADD_TODO_LOADING })
  let data = { title: payload, state: false };
  axios.post("http://localhost:8080/todos", data).then(res => {
    dispatch({ type: ADD_TODO_SUCCESS, payload: res.data })
  }).catch(() => {
    dispatch({ type: ADD_TODO_ERROR })
  })
}
