// Extentions
import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import 'bulma/css/bulma.css';
import './FlatPreview.css';
import UserStore from '../../store/UserStore';

export const FlatPreview = (props) => {

    var toggleLike = () => {
        if (!props.UserStore.currUserGetter) props.history.push('/login');
        console.log(props.flat.id);
        props.UserStore.toggleLike(props.flat.id);
    }
    
    return (
        <li className="flat-preview">
            <div onClick={toggleLike} className="heart">
                {props.flat.userLikedIds ?
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    :
                    <i className="fa fa-heart" aria-hidden="true" ></i>
                }
            </div>
            <NavLink to={`/flat/${props.flat.id}`}>
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


