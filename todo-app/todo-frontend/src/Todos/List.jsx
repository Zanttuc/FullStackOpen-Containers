import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos = [], deleteTodo, completeTodo }) => {
  const items = Array.isArray(todos) ? todos : [];

  return (
    <>
      {items.map((todo) => (
        <React.Fragment key={todo._id}>
          <hr />
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default TodoList;
