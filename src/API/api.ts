import {Todo} from "../Types/Todo";

export const getTodo = (url: string): Promise<Todo[]> => {
  return fetch(url)
    .then(response => response.json())
};
