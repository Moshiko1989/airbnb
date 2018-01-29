import React, { Component } from 'react'
import {inject , observer} from 'mobx-react'

import ProfileCard from '../../cmps/ProfileCard/ProfileCard.js'
import VacationCard from '../../cmps/VacationCard/VacationCard.js'
import FlatLikedCard from '../../cmps/FlatLikedCard/FlatLikedCard.js'
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
        <section className="profile-page-container">
                <div className="card profile-page-header">
                    <ProfileCard profile={currUserGetter} delUser={this.delUser} editUSer={this.editUSer} />
                </div>
            <div className="profile-page-body">
                <h1 className="title"> <i className="fa fa-suitcase" aria-hidden="true"></i> Your Next Vactions</h1>
                <div className="vacation-cards">
                {
                    currUserGetter.bookedFlats.map(vaction =>{
                        return  <VacationCard vaction={vaction} key={vaction.vacationId} />
                    })
                }
                </div>
                <h1 className="title"> <i className="fa fa-plane" aria-hidden="true"></i> Your Wish Vactions</h1>
                <div className="flats-liked-cards">
                {
                    currUserGetter.likedFlatsIds.map(flat =>{
                        return  <FlatLikedCard flat={flat} key={flat} />
                    })
                }
                </div>  
            </div>
        </section>
        )
    }
}

