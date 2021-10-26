import React from 'react'
import Todo from "./Todo"

import {StateContext, ThemeContext} from '../Contexts'
import {useContext} from 'react/cjs/react.development'

export default function TodoList() {
  const {state} = useContext(StateContext);
  const {todo} = state;

  return (
    <div>
      <h3>Todo List</h3>  
      <div>
        {todos.map((p, i) => <Todo {...p} title={p.title} description={p.description} key={"todo-" + i} todoId={i} />)}
      </div>
    </div>
  )
}