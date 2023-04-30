import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../Types/Todo';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => (
  <li
    key={todo.id}
  >
    <span className={classNames({ 'has-text-success': todo.completed },
      { 'has-text-danger': !todo.completed })}>
      {todo.title}
    </span>
  </li>
);
