const isAuthenticated = state => state.auth.token;
const getUserInfo = state => state.auth.user;
const getUserName = state => state.auth.user.username;

export default { isAuthenticated, getUserInfo, getUserName };
