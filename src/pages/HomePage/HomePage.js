// Extentions
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
// Styles
import 'bulma/css/bulma.css';
import './HomePage.css';
// Components
import { FlatPreview } from '../../cmps/FlatPreview/FlatPreview';



@inject('FlatStore')
@observer
export class HomePage extends Component {
    state = {
    }

    componentWillMount() {
        this.props.FlatStore.loadFlats();
    }
    toggleLike = (e) => {
        console.log(e.target.display);
        e.target.display = 'none';

    }


    render() {
        return (
            <main className="main-home">
                <ul>
                    {
                        this.props.FlatStore.flatsGetter.map((flat) => {
                            return <FlatPreview key={flat.id} flat={flat} />
                        })
                    }
                </ul>
            </main>
        )
    }
}

