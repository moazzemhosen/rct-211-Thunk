import React, { useRef } from 'react'
import { useDispatch} from "react-redux";
import { addTodo } from '../Redux/actions';

const TodoInput = () => {
      const dispatch = useDispatch();
      const ref = useRef();

     

  const handleAdd = () => {    
        let text = ref.current.value;
        // addTodo(dispatch,text)
        dispatch(addTodo(text));

        ref.current.value = "";
      };
  return (
    <div>
      TodoInput
    
       <input type="text" ref={ref} placeholder='write todo'  />
      
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput