import React, {useContext, useEffect} from 'react'

import {ThemeContext, StateContext} from "../Contexts";
import {useResource} from 'react-request-hook';

export default function Todo({title, user, description, isCompleted, dateCompleted, todoId}) {

  const {secondaryColor} = useContext(ThemeContext);
  const {dispatch} = useContext(StateContext);
  
  const [todo, toggleComplete] = useResource(({todoId, isCompleted}) => ({
    url: '/todos',
    method: 'post',
    data: {todoId, isCompleted}
  }));

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
     <input type="checkbox" onClick={(e) => {dispatch({type: 'TOGGLE_TODO', isCompleted: !isCompleted, todoId: todoId})}} />
     <button onClick={(e) => {dispatch({type: 'DELETE_TODO', todoId: todoId})}}>Delete</button>
     {isCompleted && <><br/>Completed on: {new Date(dateCompleted).toLocaleDateString('en-us')} <br/></>}
    <hr/>
    </div>
)
}
    
 