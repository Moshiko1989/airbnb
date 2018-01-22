import React, { Component } from 'react'
import { observable, action, computed , autorun } from 'mobx'
import FlatCard from '../../cmps/FlatCard/FlatCard'

import {inject , observer} from 'mobx-react'

@inject('UserStore')
@observer
export class ProfilePage extends Component {

    render(){
        const {currUser} = this.props.UserStore
        return(
            <section>
                <h1>{currUser.name.toUpperCase()} PROFILE</h1>
                <div>
                    <h2>Saved listings</h2>
                    { currUser.bookedFlats.map(flat =>{
                        return <FlatCard flat={flat}/>
                    })
                    }
                </div>
            </section>
        )
    }
}

