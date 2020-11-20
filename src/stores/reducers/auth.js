import { type } from '../actions/auth';

const initState = {
  token: null,
  user: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case type.SET_TOKEN:
      return { ...state, token: action.token };
    case type.SET_USER:
      return { ...state, user: action.user };
    case type.LOGIN:
      return { ...state, token: action.token, user: action.user };
    case type.LOGOUT:
      return { ...state, token: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
