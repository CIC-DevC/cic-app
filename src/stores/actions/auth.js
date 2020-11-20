const baseType = 'auth/';

export const type = {
  SET_TOKEN: baseType + 'SET_TOKEN',
  SET_USER: baseType + 'SET_USER',
  LOGIN: baseType + 'LOGIN',
  LOGOUT: baseType + 'LOGOUT',
};

export const setToken = (token) => ({
  type: type.SET_TOKEN,
  token: token,
});

export const setUser = (user) => ({
  type: type.SET_USER,
  user: user,
});

export const login = (token, user) => ({
  type: type.LOGIN,
  token: token,
  user: user,
});

export const logout = () => ({
  type: type.LOGOUT,
});
