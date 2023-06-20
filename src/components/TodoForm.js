import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  //console.log(todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Whatchu doing today?"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
