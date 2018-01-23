import { observable, action, autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null

    @action _setUser = (user) => {
        // UserService.saveUser(user)
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
         this.setUser(user)
         UserService.saveUser(user)
     }
}



const store = new UserStore()
export default store;