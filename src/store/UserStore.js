import { observable, action, autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null

    @action _setUser = (user) => {
        // UserService.saveUser(user)
        console.log('user,',user)
        this.currUser = user
    }

    loadUser = autorun (() => {
        var user = UserService.loadUser()
        this.currUser = user
     })

     @action _clearUser = () => {
        this.currUser = null; 
     }
     clearUser = () => {
         this._clearUser()
         UserService.clearUserFromStorage();
     }
     setUser = (user) => {
        
         UserService.saveUser(user)
         .then(user =>{this._setUser(user)
            console.log(user)})
     }
}



const store = new UserStore()
export default store;