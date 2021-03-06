export const login = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { loading: true }
    case 'LOGIN_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'LOGIN_FAIL': 
      return { loading: false, error: action.payload }
    case 'LOGOUT':
      return {}
    default: return state
  }
}

export const register = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return { loading: true }
    case 'REGUSTER_SUCCESS': 
      return { loading: false, userInfo: action.payload }
    case 'REGISTER_FAIL':
      return { loading: false, error: action.payload }
    default: return state
  }
}