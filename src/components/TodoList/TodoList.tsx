import React from "react";

import { Todo } from "../../Types/Todo";

import { TodoItem } from "../TodoItem/TodoItem";

type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem todo={todo} />
    ))}
  </ul>
);
