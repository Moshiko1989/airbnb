import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
// CSS
import './FlatPage.css'

// Services
import FlatService from '../../services/FlatService'

@inject('FlatStore')
@observer
export class FlatPage extends Component {

    componentDidMount() {
        var flatId = this.props.match.params.id;
        console.log(flatId);
    }

    render() {
        // var id
        // var flatId = FlatService.getFlatById()
        return (
            <section className="flat-info">
                <div>
                    <img className="flat-img" src={'/assets/img/1.jpg'}/>
                </div>
                <div>
                    <h1>Flat Title</h1>
                    <h3>Flat Address</h3>
                    <hr/>
                    <h4>About this listing</h4>
                    <div  className="flat-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div> 
                </div>
                <div className="amenities">
                    <ul>
                        <li>Amenities</li>
                        <li>Wifi</li>
                        <li>TV</li>
                        <li>Breakfast</li>
                        <li>Pets allowed</li>
                        <li>Kitchen</li>
                        <li>Laptop-friendly workplace</li>
                    </ul>
                </div>
                <hr/>
                <div className="flat-prices">
                    <ul>
                        <li>Prices</li>
                        <li>Per night: 91$</li>
                        <li>Weekly discount: 13%</li>
                        <li>Extra people: 25$   </li>
                        <li>Monthly discount: 28%</li>
                    </ul>
                </div>
                <hr/>
            </section>
        );
    }
}