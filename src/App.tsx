import React, { useEffect, useMemo, useState } from 'react';

import { getTodo } from './API/api';
import { Todo } from './Types/Todo';
import { FilterType } from './Types/FilterTypes';
import { filterTodos } from './helpers/FilterTodos';

import { Fields } from './components/Fields/Fields';
import { TodoList } from './components/TodoList/TodoList';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.All);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    // eslint-disable-next-line max-len
    const selectedFilterType = FilterType[selectedValue as keyof typeof FilterType];

    setFilterType(selectedFilterType);
  };

  const visibleTodos = useMemo(
    () => filterTodos(todos, filterType),
    [todos, filterType],
  );

  useEffect(() => {
    getTodo('https://jsonplaceholder.typicode.com/todos')
      .then(setTodos);
  }, []);

  return (
    <div className="App">
      <div className="box">
        <h2 className="title is-2">Todos🎓</h2>

        <Fields onFilterChange={handleSelectChange} />

        <TodoList todos={visibleTodos} />
      </div>
    </div>
  );
};
