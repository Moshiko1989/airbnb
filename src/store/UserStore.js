import { observable, action, autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null
    @action
    setUser = (user) => {
        UserService.saveUser(user)
        this.currUser = user
    }
    loadUser = autorun (() => {
        var user = UserService.loadUser()
        this.currUser = user
     })

}



const store = new UserStore()
export default store;