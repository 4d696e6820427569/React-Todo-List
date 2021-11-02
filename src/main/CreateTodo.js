import React, {useState, useContext} from "react";
import { StateContext } from "../Contexts";
import {useResource} from 'react-request-hook';

/**
 * Need a dateCreated.
 * Need a boolean to indicate if it's completed.
 * Need a dateCompleted.
 */
export default function CreateTodo() {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const {state, dispatch} = useContext(StateContext);
  const {user} = state;

  const [todo, createTodo] = useResource(({title, description, user}) => ({
    url: '/todos',
    method: 'post',
    data: {title, description, user}
  }));

  function handleCreate() {
    createTodo({title, description, user});
    dispatch({type: 'CREATE_TODO', title, description, user})
  }
  function handleTitle(evt) { setTitle(evt.target.value); }
  function handleDescription(evt) { setDescription(evt.target.value); }

  return (
    <form onSubmit={ e => {e.preventDefault(); handleCreate();}}>
      <h3>Create new todo</h3>
      <div>Ownder: <b>{user}</b></div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle}/>
      </div>

      <div>
        <label htmlFor="create-description">Description:</label>
        <input type="text" name="create-description" id="create-description" value={description} onChange={handleDescription}/>
      </div>

      <input type="submit" value="Create new todo"/>
    </form>
  )

}
