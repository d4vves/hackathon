import React, { useState } from 'react'
import Compass from './svg/Compass'


export default function Landmark(props) {
    const [showInfo, setShowInfo] = useState(false)
    const [hideName, setHideName] = useState(true)

    function toggleInfo() {
        setShowInfo(!showInfo)
        setHideName(!hideName)
    }

    return (
       
        <div>
            <section className="mainSection">
                <div className="background">
                    <img width='500px' height='600px' src={props.currentLandmark.image} alt="landmark" />
                </div>
                <div className={`${showInfo ? 'info' : 'hideInfo'}`}>
                    <span>{props.currentLandmark.name}</span>
                    <span>{props.currentLandmark.city}, {props.currentLandmark.country}</span>
                    <div>
                        <span>{props.currentLandmark.language}</span>
                        <span>{props.currentLandmark.currency}</span>
                        <span>{props.currentLandmark.climate}</span>
                    </div>
                    <div>
                        <img width="200px" height="100px" src={props.currentLandmark.location} alt="landmark-location"/>
                    </div>
                    <div>
                        <span>{props.currentLandmark.desc}</span>
                    </div>
                </div>
                <div className={`${(showInfo == true) ? 'hideName' : !'hideName'}`}>
                    <span>{props.currentLandmark.name}</span>
                    <span>{props.currentLandmark.city}, {props.currentLandmark.country}</span>
                </div>
                <div className="button" onClick={toggleInfo}>
                    <Compass />
                </div>
            </section>
        </div>
    )
}