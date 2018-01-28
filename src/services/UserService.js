import StorageService from '../services/StorageService'

import axios from 'axios'
let URL = 'http://localhost:3003'
if (process.env.NODE_ENV !== 'development') {
    URL = ''
}
// import uniqid from 'uniqid'

const STORAGE_KEY = 'user';

function loadPrevUser() {
    var user = StorageService.load(STORAGE_KEY)
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(user)
        }, 250)
    })
}

function loadUser(credentials) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                name: 'mock user from server',
                bookedFlats: [],
                likedFlatsIds: [],
            })
        }, 250)
    })
}

function saveUser(user) {
    return axios.post(`${URL}/data/user`, user)
        .then(res => {
            StorageService.save(STORAGE_KEY, res.data)
            return res.data
        })
        .catch(e => {
            throw e
        })
    // return new Promise((res, rej) => {
    //     StorageService.save(STORAGE_KEY, user)
    //     setTimeout(() => {
    //         res(user)
    //     }, 250)
    // })
}

function getEmptyUser() {
    return {
        // id: 'mock id',
        name: 'test name',
        likedFlatsIds: [],
        bookedFlats: [],
        joined: Date.now(),
    }
}

function clearUserFromStorage() {
    StorageService.clear(STORAGE_KEY)
}

function updateUser(user) {
    console.log(user._id,'id')
    return axios.put(`${URL}/data/user/${user._id}`, user)
        .then(res => {
            console.log(res.data)
            StorageService.save(STORAGE_KEY, user)
            return res.data
        }).catch((e) =>{
            throw e;
        })
}

export default {
    STORAGE_KEY,
    loadPrevUser,
    loadUser,
    saveUser,
    getEmptyUser,
    clearUserFromStorage,
    updateUser
}