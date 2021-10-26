import React, {useState, useReducer, useEffect} from 'react';
import {useResource} from 'react-request-hook';

import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import UserPanel from "./user/UserPanel";
import appReducer from './reducers';

import {ThemeContext, StateContext} from './Contexts'

function App() {

  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }));

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: [] });

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({type: 'FETCH_TODOS, todos: todos.data'});
    }
  }, [todos]);

  const {user} = state;

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
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <UserPanel />
        <br/><br/><hr/><br/>
        {user && <CreateTodo />}
        <br/><br/><hr/><br/>
        <TodoList />
        </StateContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
