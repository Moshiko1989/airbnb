import React, { Component } from 'react'
import {inject , observer} from 'mobx-react'

import ProfileCard from '../../cmps/ProfileCard/ProfileCard.js'
import VacationCard from '../../cmps/VacationCard/VacationCard.js'
import './ProfilePage.css';

@inject('UserStore')
@observer
export class ProfilePage extends Component {

    delUser = () =>{
        console.log('deleting')
    }
    editUSer = () =>{
        console.log('editUSer')
    }

    render(){
        const {currUserGetter} = this.props.UserStore
        if (!currUserGetter) return <div>Sorry, no user yet</div>
        return(
            <section>
                <div className="card">
                    <ProfileCard profile={currUserGetter} delUser={this.delUser} editUSer={this.editUSer} />
                </div>
                <div className="vacation-cards">{
                    currUserGetter.bookedFlats.map(vaction =>{
                        return  <VacationCard vaction={vaction} key={vaction.vacationId} />
                    })
                }
                </div>
            </section>
        )
    }
}

