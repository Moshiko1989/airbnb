import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FlatService from '../../services/FlatService.js'
import { inject } from 'mobx-react';
import '../FlatPreview/FlatPreview.css'

@inject('UserStore')
class VacationCard extends Component {

    state = {
        flat: null,
        showBookingModal: false
    }
    componentDidMount() {
        var flatId = this.props.vaction.flatId
        console.log('id: ', flatId)
        FlatService.getFlatById(flatId)
            .then(flat => {
                this.setState({ flat })
            })
            .catch(err =>{
                console.log(err,'no flat');
            })
    }

    bookPlace = () => {
        this.setState({ showBookingModal: true });
        setTimeout(() => {
            this.setState({ showBookingModal: false });
            this.props.UserStore.removeBookedFlat(this.props.vaction.vacationId)
        }, 3000)
    }
    render() {
        const { vaction } = this.props
        const { flat, showBookingModal } = this.state
        return (
            (flat) ?
                < section className="flat-preview card">
                    <h1 className="title">{flat.title}</h1>
                    <h3 className="subtitle">{flat.address}</h3>
                    <aside className="img-container">
                        <img src={flat.imgUrl} alt="flat" />
                    </aside>
                    <aside className="flat-txt-container">
                        <p className="flat-txt"><i className="fa fa-user-plus" aria-hidden="true"></i> {vaction.guestCount}</p>
                        <p className="flat-txt"> <i className="fa fa-calendar-o" aria-hidden="true"></i>  {vaction.bookStart.day}/{vaction.bookStart.month} to {vaction.bookEnd.day}/{vaction.bookEnd.month}</p>
                    </aside>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                <a onClick={this.bookPlace}><i className="fa fa-check-circle-o" aria-hidden="true"></i></a>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                <NavLink to={`/flat/${vaction.flatId}`}><i className="fa fa-eye" aria-hidden="true"></i></NavLink>
                            </span>
                        </p>
                    </footer>
                    {
                        (showBookingModal) ?
                            <div className="notification is-link">
                                <button className="delete"></button>
                                <i className="fa fa-plane" aria-hidden="true"></i>
                                <strong>You All Set</strong> , Pack Your Bag
                        </div>
                            :
                            ''
                    }
                </section>
                :
                <div className="flat-preview card">
                    <a className="button is-loading">Loading</a>
                </div>

        )
    }
}

export default VacationCard;
