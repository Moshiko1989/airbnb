import React from 'react';
import { NavLink } from 'react-router-dom';

import './FlatPreview.css'

export const FlatPreview = (props) => {
    console.log()
    return (
        <li className="flat-preview">

            {/* <i onClick={this.toggleLike} className="fa fa-heart" aria-hidden="true" style={{ display: 'none' }}></i> */}

            {/* <i onClick={this.toggleLike} className="fa fa-heart-o"aria-hidden="true"></i> */}

            <NavLink to={`/flat/${props.flat.id}`}>
                {/* <NavLink to='#'> */}
                <aside className="img-container">
                    <img src={props.flat.imgUrl} alt="flat" />
                </aside>
                <aside className="flat-txt-container">
                    <h2 className="flat-txt">{props.flat.title}</h2>
                    <h4 className="flat-txt">{props.flat.address}</h4>
                </aside>
            </NavLink>
        </li>
    )
}


