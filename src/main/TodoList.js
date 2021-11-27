import React, {useContext} from 'react'
import Todo from "./Todo"

import {StateContext, ThemeContext} from '../Contexts'

export default function TodoList() {
  const {state} = useContext(StateContext);
  const {todos} = state;

  return (
      <div>
        {todos.map((p, i) => <Todo {...p} title={p.title} user={p.user} dateCompleted={p.dateCompleted} 
        description={p.description} isCompleted={p.isCompleted} key={"todo-" + i} todoId={p.id} />)}
    </div>
  )
}