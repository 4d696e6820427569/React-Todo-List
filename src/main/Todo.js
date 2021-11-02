import React, {useContext, useEffect} from 'react'

import { Button } from 'react-boostrap'

import {ThemeContext, StateContext} from "../Contexts";
import {useResource} from 'react-request-hook';

export default function Todo({title, user, description, isCompleted, dateCompleted, todoId}) {

  const {secondaryColor} = useContext(ThemeContext);
  const {dispatch} = useContext(StateContext);
  
  const [toggledTodo, toggleComplete] = useResource((todoId, isCompleted) => ({
    url: `/todos/${todoId}`,
    method: 'patch',
    data: {
      isCompleted: isCompleted,
      dateCompleted: Date.now()
    }
  }));

  const [deletedTodo, deleteTodo] = useResource((todoId) => ({
    url: `/todos/${todoId}`,
    method: "delete"
  }));

  useEffect(() => {
    if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
      dispatch({type: 'DELETE_TODO', todoId: todoId})
    }
  }, [deletedTodo])

  useEffect(() => {
    if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
      dispatch({type: 'TOGGLE_TODO', isCompleted: toggledTodo.data.isCompleted, dateCompleted: toggledTodo.data.dateCompleted, todoId})
    }
  }, [toggledTodo])

  /*
  useEffect(() => {
  }, [todo]);
  */
return (
    <div>
      <h3 style={{ color:secondaryColor}}>{title}</h3>
      <div>{description}</div>
      <br />
      <i>Owner: <b>{user}</b></i>
      <br />
     <input type="checkbox" checked={isCompleted} onChange={e => {toggledTodo(todoId, e.target.checked)}} />
     <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete</Button>
     {isCompleted && <><br/>Completed on: {new Date(dateCompleted).toLocaleDateString('en-us')} <br/></>}
    <hr/>
    </div>
)
}
   