import { observable, action, computed , autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null

    @action
    setUser = (user) => {
        this.currUser = user
    }

}

autorun (() => {
    var user = UserService.loadUser()
    this.setUser(user)
 })


const store = new UserStore
export default store;