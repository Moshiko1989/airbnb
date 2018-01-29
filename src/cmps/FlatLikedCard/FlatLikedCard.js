import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import FlatService from '../../services/FlatService.js'
import { inject } from 'mobx-react';
import '../FlatPreview/FlatPreview.css'
import './FlatLikedCard.css'

@inject('UserStore')
class FlatLikedCard extends Component {

    state = {
        flat: null,
    }
    componentDidMount() {
        var flatId = this.props.flat
        console.log('id: ', flatId)
        FlatService.getFlatById(flatId)
            .then(flat => {
                this.setState({ flat })
            })
    }

    render() {

        const { flat } = this.state
        return (
            (flat) ?
                < article  className="message">
                    <NavLink to={`/flat/${flat}`}>
                    <div className="message-header">
                        <p>{flat.title}</p>
                        <p>{flat.address}</p>
                    </div>
                        <div className="message-body">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                            <img src={flat.imgUrl} />
                        </div>
                    </NavLink>
                </article >
                :
                <div className="flat-preview card">
                    <a className="button is-loading">Loading</a>
                </div>

        )
    }
}

export default FlatLikedCard;
