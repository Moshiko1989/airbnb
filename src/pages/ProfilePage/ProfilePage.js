import React, { Component } from 'react'
// import { observable, action, computed , autorun } from 'mobx'
import FlatCard from '../../cmps/FlatCard/FlatCard'

import {inject , observer} from 'mobx-react'

import './ProfilePage.css';

@inject('UserStore')
@observer
export class ProfilePage extends Component {

    render(){
        const {currUserGetter} = this.props.UserStore
        if (!currUserGetter) return <div>Sorry, no user yet</div>
        return(
            <section className="profile">
                <h1>{currUserGetter.name.toUpperCase()} PROFILE</h1>
                <div>
                    <h2>Saved listings</h2>
                    { currUserGetter.bookedFlats.map(flat =>{
                        return <FlatCard flat={flat}/>
                    })
                    }
                </div>
            </section>
        )
    }
}

