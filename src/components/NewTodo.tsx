import React, { useState } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          type="text"
          id="todo-text"
          onChange={handleChange}
          value={inputValue}
        />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
