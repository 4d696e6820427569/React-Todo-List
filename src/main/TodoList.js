import Todo from "./Todo"

export default function TodoList({todos=[]}) {
  return (
    <div>
      <h3>Todo List</h3>  
      <div>
        {todos.map((p, i) => <Todo newTodo={p} key={"todo-" + i} />)}
      </div>
    </div>
  )
}