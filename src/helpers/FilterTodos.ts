import { Todo } from '../Types/Todo';
import { FilterType } from '../Types/FilterTypes';

export const filterTodos = (allTodos: Todo[], filterMode: FilterType) => {
  switch (filterMode) {
    case FilterType.Completed:
      return allTodos.filter(todo => todo.completed);

    case FilterType.Active:
      return allTodos.filter(todo => !todo.completed);

    default:
      return allTodos;
  }
};
