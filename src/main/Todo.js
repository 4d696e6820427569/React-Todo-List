import React, {useContext} from 'react'

import {ThemeContext, StateContext} from "../Contexts";

export default function Todo({title, user, description, isCompleted, dateCompleted, todoId}) {

  const {secondaryColor} = useContext(ThemeContext);
  const {dispatch} = useContext(StateContext);
 /*
  if (newTodo.isCompleted) {
    return (
      <form onSubmit={e => {e.preventDefault(); dispatch({type: 'DELETE_TODO', title: newTodo.title});} }>
        <h3>{newTodo.title}</h3>
        <p>{newTodo.description}</p>
        <p>Date created: {newTodo.dateCreated}</p>
        <p>Completed: {newTodo.dateCompleted}</p>
        <input type="checkbox" 
        onChange={e => {e.preventDefault(); dispatch({type: 'TOGGLE_TODO',
        title: newTodo.title, todoId: todoId, isCompleted: !newTodo.isCompleted})}}/>
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
        title: newTodo.title, todoId: todoId, isCompleted: !newTodo.isCompleted})}}/>
        <input type="submit" value="Delete" />
      </form>
    )
  }
}
*/
return (
    <div>
      <h3 style={{ color:secondaryColor}}>{title}</h3>
      <div>{description}</div>
      <br />
      <i>Owner: <b>{user}</b></i>
      <br />
     <input type="checkbox" onClick={(e) => {dispatch({type: 'TOGGLE_TODO', isCompleted: !isCompleted, todoId: todoId})}} />
     <button onClick={(e) => {dispatch({type: 'DELETE_TODO', todoId: todoId})}}>Delete</button>
     {isCompleted && <><br/>Completed on: {new Date(dateCompleted).toLocaleDateString('en-us')} <br/></>}
    <hr/>
    </div>
)
}
    
 