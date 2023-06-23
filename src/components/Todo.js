import React from "react";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="flex">
      <p
        className={`${task.completed ? "text-slate-400 line-through" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex">
        <p onClick={() => editTodo(task.id)}> pen </p>
        <p onClick={() => deleteTodo(task.id)}> bin </p>
      </div>
    </div>
  );
};

export default Todo;
