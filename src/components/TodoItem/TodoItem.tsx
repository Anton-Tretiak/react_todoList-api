import React from "react";

import {Todo} from "../../Types/Todo";

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => (
  <li
    key={todo.id}
  >
    {todo.title}
  </li>
);
