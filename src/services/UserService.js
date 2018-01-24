import StorageService from '../services/StorageService'

// import axios from 'axios'
// let URL = 'http://localhost:3003'
// if (process.env.NODE_ENV !== 'development'){
//     URL = ''
// }
// import uniqid from 'uniqid'

const STORAGE_KEY = 'user';

function loadPrevUser() {
    var user = StorageService.load(STORAGE_KEY)
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(user)
        }, 250)
    }) 
}

function loadUser(credentials) {
    return new Promise ((res, rej) => {
        setTimeout(()=> {
            res({
                name: 'mok user from server',
                bookedFlats: [],
            })
        }, 250)
    })
}

function saveUser(user) {
    // console.log(user)
    return new Promise((res, rej) => {
        StorageService.save(STORAGE_KEY, user)
        setTimeout(() => {
            res(user)
        }, 250)
    })
    //     return axios.post(`${URL}/data/user`, user)
    //     .then(res => {
    //         StorageService.save(STORAGE_KEY,res.data)
    //         return res.data
    //     })
    //     .catch(err => { 
    //         throw err })
}

function getEmptyUser() {
    return {
        name: 'test name',
        bookedFlats: [],
        joined: Date.now(),
    }
}

function clearUserFromStorage() {
    StorageService.clear(STORAGE_KEY)
}

export default {
    STORAGE_KEY,
    loadPrevUser,
    loadUser,
    saveUser,
    getEmptyUser,
    clearUserFromStorage
}