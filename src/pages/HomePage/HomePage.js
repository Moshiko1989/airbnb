import React, { Component } from 'react'

import './HomePage.css'


export class HomePage extends Component {
    state ={
        transform: {
            x: 0,
            transform: "translateX("+0+"px)"
        }
    }
    doTranform = () => {
        
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

                <content className="gallery">
                    <h1>Places in Somewhere</h1>
                    <button onClick={this.doTranform}> {'<'} </button>
                    <section className="carousel" style={this.state.transform}>
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
                </content>

            </main>
        )
    }
}