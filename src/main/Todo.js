import React from "react";

export default function Todo({newTodo, dispatch}) {
  if (newTodo.isCompleted) {
    return (
      <form onSubmit={e => {e.preventDefault(); dispatch({type: 'DELETE_TODO', title: newTodo.title});} }>
        <h3>{newTodo.title}</h3>
        <p>{newTodo.description}</p>
        <p>Date created: {newTodo.dateCreated}</p>
        <p>Completed: {newTodo.dateCompleted}</p>
        <input type="checkbox" 
        onChange={e => {e.preventDefault(); dispatch({type: 'TOGGLE_TODO',
        title: newTodo.title})}}/>
        <input type="submit" value="Delete" />
      </form>
    )
  } else {
    return (
      <form onSubmit={e => {e.preventDefault(); dispatch({type: 'DELETE_TODO', title: newTodo.title});} }>
        <h3>{newTodo.title}</h3>
        <p>{newTodo.description}</p>
        <p>Date created: {newTodo.dateCreated}</p>
        <input type="checkbox" value="Unchecked" 
        onChange={e => {e.preventDefault(); dispatch({type: 'TOGGLE_TODO',
        title: newTodo.title})}}/>
        <input type="submit" value="Delete" />
      </form>
    )
  }

}