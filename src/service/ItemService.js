import axios from 'axios'
axios.defaults.withCredentials = true
    // const axios = require('axios')
    
const BASE_URL = (process.env.NODE_ENV !== 'development') ?
        '/api/items' :
        '//localhost:3000/api/items';

export default {
    // signup,
    query,
    addItem,
    getById,
    editItem,
    removeItem
}

function query() {
    return axios.get(BASE_URL).then(res => {
        return res.data;
    });
}

function addItem(item){
    return axios.post(BASE_URL,item)
        .then(res => {
            return res.data
        })
}

function getById(_id){
    return axios.get(`${BASE_URL}/${_id}`)
        .then(items => {
            return items.data
        })
}

function  editItem(itemToEdit){
    return axios.put(`${BASE_URL}/${itemToEdit._id}`,itemToEdit)
    .then(res => res.data)
}

function removeItem(itemId){
    return axios.delete(`${BASE_URL}/${itemId}`)
}




//function edit(mealToEdit) {
//     return axios.put(`${BASE_URL}/${mealToEdit._id}`, mealToEdit)
//         .then(res => {
//             return res.data
//         })
// }

// function add(meal) {
    //     return axios.post(BASE_URL, meal)
    //         .then(res => {
        //             return res.data
        //         })
        // } 
        
        // function remove(mealId) {
            //     return axios.delete(`${BASE_URL}/${mealId}`)
            // }