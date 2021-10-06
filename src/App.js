import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import UserPanel from "./user/UserPanel";
import appReducer from './reducers';
import {useState, useReducer, useEffect} from 'react';

function App() {
  const init_todos = [
    {
      title: "Create the front-end LogIn, LogOut, Registration components.",
      description: "Don't need to validate or make the data persistent.",
      dateCreated: Date.now(),
      isCompleted: true,
      dateCompleted: Date.now()
    },

    {
      title: "Create a TodoList component responsible for rendering a list of Todo.",
      description: "",
      dateCreated: Date.now(),
      isCompleted: true,
      dateCompleted: Date.now()
    },

    {
      title: "Rendering isCompleted as a check box.",
      description: "",
      dateCreated: Date.now(),
      isCompleted: true,
      dateCopmleted: Date.now()
    },

    {
      title: "Date is not displaying in the correct format.",
      description: "We want date to display in mm/dd/yyyy format.",
      dateCreated: Date.now(),
      isCompleted: false,
      dateCompleted: null
    },

    {
      title: "Implement logic for LogIn/LogOut",
      description: "The current log in/out is not working correctly.",
      dateCreated: Date.now(),
      isCompleted: false,
      dateCompleted: null
    },

    {
      title: "Implement the create todo functionality.",
      description: "Right now we're relying on hardcoding to create todo.",
      dateCreated: Date.now(),
      isCompleted: false,
      dateCompleted: null
    }
  ];

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
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
