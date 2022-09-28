import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoProvider from '../context/TodoProvider';

function TodoApp() {
  return (
    <TodoProvider>
      <div className="app">
        <div className="todo-list">
          <TodoItem />
          <TodoForm />
        </div>
      </div>
    </TodoProvider >
  );
}

export default TodoApp;