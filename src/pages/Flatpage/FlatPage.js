import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';
// CSS
import './FlatPage.css'

@inject('FlatStore')
@observer
export class FlatPage extends Component {

    componentDidMount() {
        var flatId = this.props.match.params.id;
        if (!this.props.FlatStore) return <h1>No content, sorry</h1>
        this.props.FlatStore.loadFlatById(flatId)
    }

    render() {
        
        var flat = this.props.FlatStore.flatGetter;
        if (!flat) return <h1>Sorry, flat is not available</h1>
        console.log({flat});

        return (
            <section className="flat-info">
                <div>
                    <img className="flat-img" src={flat.imgUrl} alt="flat"/>
                </div>
                <div>
                    <h1>{flat.title}</h1>
                    <h3>{flat.address}</h3>
                    <hr/>
                    <h4>About this listing</h4>
                    <div  className="flat-desc">
                        <p>{flat.desc}</p>
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
                    <h2>Prices</h2>
                    <ul>
                        <li>Per night: {flat.prices.perNight}$</li>
                        <li>Weekly discount: {flat.prices.weeklyDiscount}%</li>
                        <li>Extra people: {flat.prices.extraPeople}$</li>
                        <li>Monthly discount: {flat.prices.monthlyDiscount}%</li>
                    </ul>
                </div>
                <hr/>
            </section>
        );
    }
}