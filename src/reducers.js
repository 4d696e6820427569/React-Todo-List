function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return {
        'username': action.username,
        'access_token': action.access_token
      }
    case 'LOGOUT':
      return {
        'usename': undefined,
        'access_token': undefined
      }
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO':
      const newTodo = {
        todoId: action.todoId,
        title: action.title,
        user: action.user,
        description: action.description,
        dateCreated: Date(),
        isCompleted: false,
        datedCompleted: undefined
      }
      return [ newTodo, ...state ]
    case 'TOGGLE_TODO':
      return state.map( (p) => {
        if (p.todoId === action.todoId) {
          p.isCompleted = action.isCompleted;
          p.dateCompleted = Date.now();
        }
        return p;
      });
      
    case 'DELETE_TODO':
      return state.filter((p) => p.todoId !== action.todoId);
    case 'FETCH_TODOS':
      return action.todos;
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
