import CreateTodo from "./main/CreateTodo";
import TodoList from "./main/TodoList";
import UserPanel from "./user/UserPanel";

function App() {
  const todos = [
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
  ]

  return (
    <div>
      <UserPanel />
      <br/><br/><hr/><br/>
      <CreateTodo />
      <br/><br/><hr/><br/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
