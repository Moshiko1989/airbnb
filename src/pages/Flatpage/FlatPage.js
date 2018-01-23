import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
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
        console.log({ flat });

        return (
            <section className="flat-info">
                <div>
                    <img className="flat-img" src={flat.imgUrl} alt="flat" />
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
              
                        <h1 className="align-left">Amenities</h1>
                    
                   
                        <ul className="detail-list">
                            <li><i className="fa fa-wifi" aria-hidden="true"></i><span> Wifi</span></li>
                            <li><i className="fa fa-television" aria-hidden="true"></i><span> TV</span></li>
                            <li><i className="fa fa-coffee" aria-hidden="true"></i><span> Breakfast</span></li>
                        </ul>
                   

                  
                        <ul className="detail-list">
                            <li><i className="fa fa-paw" aria-hidden="true"></i><span> Pets allowed</span></li>
                            <li><i className="fa fa-cutlery" aria-hidden="true"></i><span> Kitchen</span></li>
                            <li><i className="fa fa-laptop" aria-hidden="true"></i><span> Laptop-friendly workplace</span></li>
                        </ul>
                 
                </div>
                <hr />
                <div className="flat-prices">
                
                    <h1 className="align-left">Prices</h1>
                  
                        <ul className="detail-list">
                            <li>Per night: <span> {flat.prices.perNight}$</span></li>
                            <li>Weekly discount: <span> {flat.prices.weeklyDiscount}%</span></li>
                        </ul>
                   
                 
                        <ul className="detail-list">
                            <li>Extra people: <span> {flat.prices.extraPeople}$</span></li>
                            <li>Monthly discount: <span> {flat.prices.monthlyDiscount}%</span></li>
                        </ul>
                  
                </div>
            </section>
        );
    }
}