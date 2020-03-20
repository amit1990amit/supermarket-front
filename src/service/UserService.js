import HttpService from './HttpService' 
 


import axios from 'axios'
axios.defaults.withCredentials = true
    // const axios = require('axios')
    
const BASE_URL = (process.env.NODE_ENV !== 'development') ?
        '/api/users' :
        '//localhost:3000/api/users';

export default {
    getUserById,
    removeUser,
    editUser,
    login,
    signup,
    logout

}


function getUserById(_id){
    return axios.get(`${BASE_URL}/${_id}`)
        .then(users => {
            return users.data
        });
}

function removeUser(userId){
    return axios.delete(`${BASE_URL}/${userId}`)
}

function  editUser(UserToEdit){
    return axios.put(`${BASE_URL}/${UserToEdit._id}`,UserToEdit)
    .then(res => res.data);
}

// async function login(userCred) {
//     return axios.post('auth/login',userCred)
//     .then(res => res.data);
// }

// async function signup(userCred) {
//     console.log('a2',userCred)
//     return axios.post('auth/signup',userCred)
//     .then(res => res.data);
// }

// async function logout(){
//     await axios.post('auth/logout');
//     sessionStorage.clear();
// }


 


async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}
async function signup(userCred) {
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}
async function logout() {
    await HttpService.post('auth/logout');
    sessionStorage.clear();
}

// function getUsers() {
//     return HttpService.get('user')
// }

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}