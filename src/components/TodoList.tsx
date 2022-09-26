import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
          <li>{todo.text}</li>
          <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
