import React from 'react'

const TodoList = ({ TodoList }) => {
  return <div>
    {TodoList.map((e) => {
      return (
        <div>
          <h3>{e.title}</h3>
        </div>
      );
    })}
  </div>;
};

export default TodoList