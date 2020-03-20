import axios from 'axios'
axios.defaults.withCredentials = true
    // const axios = require('axios')
    
const BASE_URL = (process.env.NODE_ENV !== 'development') ?
        '/api/lists' :
        '//localhost:3000/api/lists';

export default {
    // signup,
    query,
    addList

    // getById,
    // editItem,
    // removeItem
}

function query(_id) {
    return axios.get(`${BASE_URL}/${_id}`).then(res => {
        return res.data;
    });
}

function addList(list = {}){
    return axios.post(BASE_URL,list)
        .then(res => {
            return res.data
        })
}

// function getById(_id){
//     return axios.get(`${BASE_URL}/${_id}`)
//         .then(items => {
//             return items.data
//         })
// }

// function  editItem(itemToEdit){
//     return axios.put(`${BASE_URL}/${itemToEdit._id}`,itemToEdit)
//     .then(res => res.data)
// }

// function removeItem(itemId){
//     return axios.delete(`${BASE_URL}/${itemId}`)
// }