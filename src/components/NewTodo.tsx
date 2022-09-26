import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
