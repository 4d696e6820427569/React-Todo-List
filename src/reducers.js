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
      return state.map( (p, i) => {
        if (i === action.postId) {
          p.isCompleted = action.isCompleted;
          p.dateCompleted = Date.now();
        }
        return p;
      });
      
    case 'DELETE_TODO':
      return state.filter((p, i) => i !== action.todoId);
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
