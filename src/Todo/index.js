import React from "react";

//STORE

//COMPONENTS
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import TodoFilter from "./TodoFilter"

export default () => {
  return (
    <div>
      <TodoFilter />
      <TodoInput />
      <TodoList />
    </div>
  );
}