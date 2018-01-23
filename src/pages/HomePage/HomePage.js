import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react';


import './HomePage.css'
import 'bulma/css/bulma.css'
// Services 


@inject('FlatStore')
@observer
export class HomePage extends Component {
    state = {
    }

    componentWillMount() {
        this.props.FlatStore.loadFlats();
    }


    render() {
        var flats = this.props.FlatStore.flatsGetter.map((flat) => {
            return (
                <li key={flat.id} className="flat-preview">
                    <NavLink to={`/flat/${flat.id}`}>
                        <aside className="img-container">
                            <img src={flat.imgUrl} alt="flat" />
                        </aside>
                        <aside className="flat-txt-container">
                            <h2 className="flat-txt">{flat.title}</h2>
                            <h4 className="flat-txt">{flat.address}</h4>
                        </aside>
                    </NavLink>
                </li>

            )
        })
        return (
            <main className="main-home">
                <ul>
                    {flats}
                </ul>
            </main>
        )
    }
}

