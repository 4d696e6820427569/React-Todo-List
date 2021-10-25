import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import UserPanel from "./user/UserPanel";
import appReducer from './reducers';
import {useState, useReducer, useEffect} from 'react';

function App() {
  const init_todos = [];

  const [ state, dispatch ] = useReducer(appReducer, { user: '', todos: init_todos });

  const {user, todos} = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}'s Todo List'`
    } else {
      document.title = 'Todo List'
    }
  }, [user])

  return (
    <div>
      <UserPanel user={user} dispatchUser={dispatch} />
      <br/><br/><hr/><br/>
      {user && <CreateTodo user={user} dispatch={dispatch} />}
      <br/><br/><hr/><br/>
      <TodoList todos={todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
