import React, {useContext, useEffect} from 'react'

import {Link} from 'react-navi'
import { Card, Button } from 'react-bootstrap'

import {ThemeContext, StateContext} from "../Contexts";
import {useResource} from 'react-request-hook';

function Todo({title, user, description, isCompleted, dateCompleted, todoId}) {

  const {secondaryColor} = useContext(ThemeContext);
  const {dispatch} = useContext(StateContext);
  
  const [toggledTodo, toggleComplete] = useResource((todoId, isCompleted) => ({
    url: `/todo/${todoId}`,
    method: 'patch',
    data: {
      isCompleted: isCompleted,
      dateCompleted: Date.now()
    }
  }));

  const [deletedTodo, deleteTodo] = useResource((todoId) => ({
    url: `/todo/${todoId}`,
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

  let processedDescription = description;

return (
  <Card>
  <Card.Body>
    <Card.Title><Link style={{ color: secondaryColor }} href={`/todo/${todoId}`}>{title}</Link>
    </Card.Title>
    <Card.Subtitle>
    <i>By <b>{user}</b></i>
    </Card.Subtitle>
    <Card.Text>
        {processedDescription}
    </Card.Text>
    
     <input type="checkbox" checked={isCompleted} onChange={e => {toggleComplete(todoId, e.target.checked)}} />
     <Button variant="link" onClick={(e) => {deleteTodo(todoId)}}>Delete</Button>
    {isCompleted && <><br/>Completed on: {new Date(dateCompleted).toLocaleDateString('en-us')} <br/></>}
  
  </Card.Body>
  </Card>
)
}
  
export default React.memo(Todo);