import React, { useState } from 'react'
import Compass from './svg/Compass'


export default function Landmark(props) {
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfo() {
        setShowInfo(!showInfo)
    }

    return (
       
        <div>
             <section className="mainSection">
            <div className="background">
                <img className="picture" src={props.currentLandmark.image} alt="" />
            </div>
            <div className={`${showInfo ? 'info' : 'hideInfo'}`}>
                <div className>
                    <span>{props.currentLandmark.name}</span>
                    <span>{props.currentLandmark.city}, {props.currentLandmark.country}</span>
                </div>
                <div className="">
                    <span>{props.currentLandmark.desc}</span>
                </div>
            </div>
            <div className="button">
                <div className="button" onClick={toggleInfo}>
                    <Compass />
                </div>
            </div>
            </section>
        </div>
    )
}