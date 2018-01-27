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
        // console.log('currUser: ', this.currUser)
    }

    @action _removeLike = (flatId) => {
        var idx = this.currUser.likedFlatsIds.indexOf(flatId)
        this.currUser.likedFlatsIds.splice(idx, 1)
        // console.log('removing')
        // console.log(this.currUser)

    }

    @action _addLike = (flatId) => {
        this.currUser.likedFlatsIds.push(flatId)
        // console.log(this.currUser)
    }

    @action _addFlat = (bookDetails) => {
        this.currUser.bookedFlats.push(bookDetails)
        console.log(this.currUser)
    }

    @action _clearUser = () => {
        this.currUser = null;
    }

    clearUser = () => {
        this._clearUser()
        UserService.clearUserFromStorage();
    }
    setUser = (user) => {
        console.log({ user })
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

    toggleLike = (flatId) => {
        if (!this.currUser.likedFlatsIds.includes(flatId)) {
            this._addLike(flatId);
            // console.log(this.currUser);
            UserService.updateUser(this.currUser, flatId)
                .then(user => {
                    this._setUser(user);
                    UserService.saveUser(this.currUser);
                });
        } else {
            this._removeLike(flatId);
            // console.log(this.currUser);
            UserService.updateUser(this.currUser)
                .then(user => {
                    this._setUser(user);
                    UserService.saveUser(this.currUser);
                });
        }

    }
    bookFlat = (bookDetails) => {
        this._addFlat(bookDetails)
        UserService.updateUser(this.currUser)
            .then(user => {
                this._setUser(user);
                UserService.saveUser(this.currUser);
            });
    }

    _loadUser = autorun(() => {
        //  console.log('autorun ran... _loadUser ran')
        UserService.loadPrevUser()
            .then(this._setUser)
    })
}



const store = new UserStore()
export default store;