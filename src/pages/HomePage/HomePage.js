import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'


import './HomePage.css'

 // Services 
 


export class HomePage extends Component {
    state = {
        transform: {
            x: 0,
<<<<<<< HEAD
            transform: "translateX("+ 0 + "px)"
=======
            style: {
                transform: "translateX("+this.x+"px)"
            }
>>>>>>> 788195039df80bb6ae1d20f3fec057fef6c2455c
        }
    }
    doTransform = () => {
        
        let transform = {...this.state.transform} 
        transform.x += 365;
        console.log(transform)
        this.setState({transform})
        console.log(this.state)
    }
 
    render() {
        let imgs = [];
        for (let i = 0; i < 30; i++) {
            imgs.push(<img key={i} src={`http://jsdojo.cachefly.net/vuebnb/images/10/Image_1_thumb.jpg`} alt="visual" />);
        }
        let firstGall = imgs.filter((img, index) => index >= 0 && index < 10);
        let midGall = imgs.filter((img, index) => index >= 10 && index < 20);
        let lastGall = imgs.filter((img, index) => index >= 20 && index < 30);
        return (
            <main className="main-home">

                <NavLink to="/flat" className="logo-container">
                <div className="logo">
                    <img src={`http://jsdojo.cachefly.net/vuebnb/images/10/Image_1_thumb.jpg`} alt="flat" />
                </div>
                </NavLink>

                {/* <content className="gallery">
                    <h1>Places in Somewhere</h1>
                    <button onClick={this.doTransform}> {'<'} </button>
                    <section className="carousel" style={this.state.transform.style}>
                        {firstGall}
                    </section>
                    <button> {'>'} </button>
                </content>

                <content className="gallery">
                    <h1>Places in Somewhere</h1>
                    <button> {'<'} </button>
                    <section className="carousel">
                        {midGall}
                    </section>
                    <button> {'>'} </button>
                </content>

                <content className="gallery">
                    <h1>Places in Somewhere</h1>
                    <button> {'<'} </button>
                    <section className="carousel">
                        {lastGall}
                    </section>
                    <button> {'>'} </button>
                </content> */}

            </main>
        )
    }
}

