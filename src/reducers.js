function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return action.username
    case 'LOGOUT':
      return ''
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      const newTodo = {
        title: action.title,
        description: action.description,
        dateCreated: Date(),
        isCompleted: false
      }
      return [ newTodo, ...state ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.title !== action.title) {
          return todo;
        }

        if (todo.isCompleted) 
          return {
            ...todo,
            dateCompleted: Date(),
            isCompleted: !todo.isCompleted
          };
        else
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          }
      });
      
    case 'DELETE_TODO':
      return state.filter(todo => todo.title !== action.title)
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action)
  }
}
