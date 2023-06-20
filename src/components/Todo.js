import React from "react";

const Todo = ({ task }) => {
  return (
    <div>
      <p>{task.heading}</p>
    </div>
  );
};

export default Todo;
