import React, {useState, useReducer } from 'react';
import {mount, route} from 'navi';
import {Router, View} from 'react-navi'

import { Container } from 'react-bootstrap';

import appReducer from './reducers';

import {ThemeContext, StateContext} from './Contexts';

import CreateTodo from "./main/CreateTodo";
import TodoListPage from "./pages/TodoListPage";
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'

function App() {

  const [ state, dispatch ] = useReducer(appReducer, { user: {}, todos: [] });

  const {user} = state;

  const [theme, setTheme] = useState({
    primaryColor: 'deepskyblue',
    secondaryColor: 'coral'
  })

  const routes = mount({
    '/': route({view :<HomePage />}),
    '/todo/create':route({view: <CreateTodo />}),
    '/todo/:id': route(req => {
      return { view: <TodoListPage id={req.params.todoId} /> }
    }),
  });
  
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
          <Router routes={routes}>
            <Container>
              <HeaderBar setTheme={setTheme}/>
              <hr/>
              <View/>
            </Container>
          </Router>
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
