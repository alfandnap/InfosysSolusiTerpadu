
export default function counterReducer(state = { username: '', password: '' }, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      }
    default:
      return state
  }
}