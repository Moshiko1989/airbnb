import StorageService from '../services/StorageService'

import axios from 'axios'
let URL = 'http://localhost:3003'
if (process.env.NODE_ENV !== 'development') {
    URL = ''
}

const STORAGE_KEY = 'user';


function loadUser(credentials) {
    if (!credentials) {
        var user = StorageService.load(STORAGE_KEY)
        if (user || user !== 'null') return  Promise.resolve(user)
        else return  Promise.reject()
    } else {
        return axios.post(`${URL}/login`, credentials)
            .then((res) => {
                console.log(res.data.user)
                return res.data.user
            })
            .catch(err => { throw err })
    }
}

function saveUser(user) {
    return axios.post(`${URL}/data/user`, user)
        .then(res => {
            StorageService.save(STORAGE_KEY, res.data)
            console.log(res.data,'save user')
            return res.data
        })
        .catch(e => {
            throw e
        })
}

function getEmptyUser() {
    return {
        username: '',
        likedFlatsIds: [],
        bookedFlats: [],
        joined: Date.now(),
    }
}

function clearUserFromStorage() {
    StorageService.clear(STORAGE_KEY)
}

function updateUser(user) {
    console.log(user._id, 'id')
    return axios.put(`${URL}/data/user/${user._id}`, user)
        .then(res => {
            console.log(res.data)
            StorageService.save(STORAGE_KEY, user)
            return res.data
        }).catch((e) => {
            throw e;
        })
}

export default {
    STORAGE_KEY,
    loadUser,
    saveUser,
    getEmptyUser,
    clearUserFromStorage,
    updateUser
}