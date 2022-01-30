import axios from "axios";
const userService = {
   
    saveUser : (user) => {
        return axios.post('/user', user);
    },
    getUser :(userId) => {
        return axios.get('/user/' + userId);
    },
    getUsers :() => {
        return axios.get('/users.json');
    },
     getMouse : (mouseId) => {
        return axios.get('/user/mouse/' + mouseId);
    },
     getKeyboard : (keyboardId) => {
        return axios.get('/user/keyborad/' + keyboardId);
    }
}

export default userService;