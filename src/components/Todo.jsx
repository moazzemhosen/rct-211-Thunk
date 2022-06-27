import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { gettodos } from '../Redux/actions'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.getTodo.data)
    console.log("todo",todo);
    useEffect(() => {
        dispatch(gettodos());
    },[todo])
  return (
      <div> Todo
          <TodoInput />
          <TodoList TodoList={todo} />
    </div>
  )
}

export default Todo;