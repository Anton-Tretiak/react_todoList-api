import React, { useEffect, useState } from 'react';

import {getTodo} from "./API/api";
import {Todo} from "./Types/Todo";

import {TodoList} from "./components/TodoList/TodoList";

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  useEffect(() => {
    getTodo('https://jsonplaceholder.typicode.com/todos')
      .then(setTodos)
  }, []);
  
  return (
    <TodoList todos={todos} />
  );
}
