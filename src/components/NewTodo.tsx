import React, { useRef } from "react";

interface NewTodoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    addTodo(enteredText);
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
