import React, {useState, useContext, useEffect} from "react";
import { StateContext } from "../Contexts";
import {useResource} from 'react-request-hook';

import {useNavigation} from 'react-navi'

export default function CreateTodo() {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const navigation = useNavigation();

  const {state, dispatch} = useContext(StateContext);
  const {user} = state;

  const [todo, createTodo] = useResource(({title, description, author}) => ({
    url: '/todo',
    method: 'post',
    headers: {"Authorization": `${state.user.access_token}`},
    data: {title, description, author}
  }));

  function handleCreate() {
    createTodo({title, description, author: user.username});
  }
  function handleTitle(evt) { setTitle(evt.target.value); }
  function handleDescription(evt) { setDescription(evt.target.value); }

  useEffect(() => {
    if (todo && todo.data) {
      dispatch({type: 'CREATE_TODO', title: todo.data.title, description: todo.data.description, todoId: todo.data.todoId, author: user.username})
      navigation.navigate(`/todo/${todo.data.todoId}`)
    }
  }, [todo])

  return (
    <form onSubmit={ e => {e.preventDefault(); handleCreate();}}>
      <h3>Create new todo</h3>
      <div>Ownder: <b>{user.username}</b></div>
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
