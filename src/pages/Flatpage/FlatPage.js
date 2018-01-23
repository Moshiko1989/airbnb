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
                    <h1 className="listing">About this listing</h1>
                    <div className="flat-desc">
                        <p>{flat.desc}</p>
                    </div> 
                </div>
                <div className="amenities">
                    <div>
                        <h1>Amenities</h1>
                    </div>
                    <div>
                        <ul className="detail-list">
                            <li>Wifi</li>
                            <li>TV</li>
                            <li>Breakfast</li>
                        </ul>
                    </div>
                    
                    <div className="detail-list">
                        <ul>
                            <li>Pets allowed</li>
                            <li>Kitchen</li>
                            <li>Laptop-friendly workplace</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="flat-prices">
                    <h1>Prices</h1>
                    <ul className="detail-list">
                        <li>Per night: {flat.prices.perNight}$</li>
                        <li>Weekly discount: {flat.prices.weeklyDiscount}%</li>
                    </ul>
                    <ul>
                        <li>Extra people: {flat.prices.extraPeople}$</li>
                        <li>Monthly discount: {flat.prices.monthlyDiscount}%</li>
                    </ul>
                </div>
            </section>
        );
    }
}