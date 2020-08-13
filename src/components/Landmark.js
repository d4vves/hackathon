import React, { useState } from 'react'
import Compass from './svg/Compass'


export default function Landmark(props) {
    const [showInfo, setShowInfo] = useState(false)

    function toggleInfo() {
        setShowInfo(!showInfo)
    }

    return (
        <div>
            <div className="background">
                <img width='500px' src={props.currentLandmark.image} />
            </div>
            <div className={`${showInfo ? 'info' : 'hideInfo'}`}>
                <div className>
                    <span>{props.currentLandmark.name}</span>
                    <span>{props.currentLandmark.city}, {props.currentLandmark.country}</span>
                </div>
                <div>
                    <span>{props.currentLandmark.desc}</span>
                </div>
            </div>
            <div>
                <button className="button" onClick={toggleInfo}>
                    <Compass />
                </button>
            </div>
        </div>
    )
}