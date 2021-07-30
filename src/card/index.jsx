import React, { Component } from 'react'
import Rectangle2 from '../assets/Rectangle2.png'
import Vector from '../assets/Vector.svg'
import './card.css'

export default class Card extends Component {
    render() {
        return (
                    
        <div className="card">
            <div className="inner-card">
                <div className="wrapper">
                    <img className="card-photo" src={Rectangle2} alt="rectangle-2"/>
                </div>
                <div className="card-text">
                    <div className="card-title">
                        An Above Average Experience
                    </div>
                    <div className="card-detail">
                        <p>
                            Travel to the premiere mountain tops of New Zealand with our guided tours. 
                            Take in the majestic scenary and witness beauty.
                        </p>
                    </div>
                    <div className="card-external-link">
                        <img src={Vector} alt="card-external-link"/> 
                    </div>
                </div>
            </div>        
        </div>
        
        )
    }
}


