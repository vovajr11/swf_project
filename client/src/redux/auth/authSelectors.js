const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.username;

export default { isAuthenticated, getUserName };
