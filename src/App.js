import React, {useState, useReducer, useEffect} from 'react';
import {useResource} from 'react-request-hook';
import {mount, route} from 'navi';
import {Router, View} from 'react-navi'

import { Container } from 'react-bootstrap';

import appReducer from './reducers';

import {ThemeContext, StateContext} from './Contexts';

import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import UserPanel from "./user/UserPanel";

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] });

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }));

  

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({type: 'FETCH_TODOS', todos: todos.data.reverse()});
    }
  }, [todos]);

  const {user} = state;

  const routes = mount({
    '/todos/create':route({view: <CreateTodo />}),
  });

  useEffect(() => {
    if (user) {
      document.title = `${user}'s Todo List'`
    } else {
      document.title = 'Todo List'
    }
  }, [user])

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
        <UserPanel />
        <br/><br/><hr/><br/>
        {user && <CreateTodo />}
        <br/><br/><hr/><br/>
        <TodoList />
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
