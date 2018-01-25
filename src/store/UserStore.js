import { computed, observable, action, autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null

    @computed get currUserGetter() {
        // console.log('computing user')
        return this.currUser;
    }

    @action _setUser = (user) => {
        // UserService.saveUser(user)
        this.currUser = user
        console.log('currUser,',this.currUser)
    }

     @action _clearUser = () => {
        this.currUser = null; 
     }

     clearUser = () => {
         this._clearUser()
         UserService.clearUserFromStorage();
     }
     setUser = (user) => {
        // console.log({user})
         UserService.saveUser(user)
            .then(this._setUser)
        //  this._setUser(user)
        //  .then(user =>{this._setUser(user)
        //     console.log(user)})
     }

     loadUser = (credentials) => {
        console.log('loadUser ran')
        
        UserService.loadUser(credentials)
        .then(this._setUser)
     }

     toggleLike = (id) => {
        UserService.toggleLike(this.currUser, id)
            .then(this._setUser);
     }

     _loadUser = autorun (() => {
         console.log('autorun ran... _loadUser ran')
        UserService.loadPrevUser()
        .then(this._setUser)
     })



    //  _loadUser = autorun (() => {
    //     var user = UserService.loadUser()
    //     this.currUser = user
    //  })
}



const store = new UserStore()
export default store;