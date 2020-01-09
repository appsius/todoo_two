import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Lay down the gun!!', completed: false },
  { id: 2, task: "Prevent the films' effect on you" }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos }}>
      <DispatchContext value={{ dispatch }}>{props.children}</DispatchContext>
    </TodosContext.Provider>
  );
}
