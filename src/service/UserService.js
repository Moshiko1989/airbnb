import StorageService from './StorageService'
import uniqid from 'uniqid'
const STORAGE_KEY = 'user';

function loadUser (){
    var user = StorageService.load(STORAGE_KEY)
    return user
}

function saveUser(user) {
    StorageService.save(STORAGE_KEY,user)
}

function getEmptyUser() {
    return {
        name:'',
        bookedVactiaions:[],
        joined: Date.now(),
        _id:uniqid() 
    }
}

export default {
    loadUser,
    saveUser,
    getEmptyUser,
}