import { computed, observable, action } from 'mobx'
import UserService from '../services/UserService'
import uniqid from 'uniqid'

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
    }
    @action _removeBookedFlat = (vacationId) => {
        var idx = this.currUser.bookedFlats.indexOf(vacationId)
        this.currUser.bookedFlats.splice(idx, 1)
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
        console.log('loadUser ran',credentials)
        return UserService.loadUser(credentials)
            .then(res => {
                this._setUser(res)
                return res
            })
            .catch(err => {
                console.log('wrong pass or email')
            })
    }

    toggleLike = (flatId) => {
        if (!this.currUser.likedFlatsIds.includes(flatId)) {
            this._addLike(flatId);
            // console.log(this.currUser);
            UserService.updateUser(this.currUser, flatId)
                .then(user => {
                    this._setUser(user);
                    console.log('user updated suscsfuly')
                });
        } else {
            this._removeLike(flatId);
            // console.log(this.currUser);
            UserService.updateUser(this.currUser)
                .then(user => {
                    this._setUser(user);
                    console.log('user updated suscsfuly')
                });
        }

    }
    bookFlat = (bookDetails) => {
        bookDetails.vacationId = uniqid()
        this._addFlat(bookDetails)
        UserService.updateUser(this.currUser)
            .then(user => {
                this._setUser(user);
                console.log('user updated suscsfuly')
            });
    }

    loadUserFromStorage = () => {
        UserService.loadUser()
            .then(user => this._setUser(user))
            .catch(console.log('no user'))
    }

    removeBookedFlat = (vacationId)=>{
        this._removeBookedFlat(vacationId)
        UserService.updateUser(this.currUser)
        .then(user => {
            this._setUser(user);
            console.log('user updated suscsfuly')
        });
    }
}



const store = new UserStore()
export default store;