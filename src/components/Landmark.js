import React, { useState } from 'react'
import Compass from './svg/Compass'


export default function Landmark(props) {
    const [showInfo, setShowInfo] = useState(false)
    const [hideName, setHideName] = useState(false)

    function toggleInfo() {
        setShowInfo(!showInfo)
    }

    function toggleName() {
        setHideName(!hideName)
    }

    return (
       
        <>
                <div className="background">
                    <img height='525px' src={props.currentLandmark.image} alt="landmark" />
                </div>
                    <div className={`wrapper ${showInfo ? 'info' : 'hideInfo'}`}>
                        <p className="landmarkName">{props.currentLandmark.name}</p>
                        <p>{props.currentLandmark.city}, {props.currentLandmark.country}</p>
                        <div className="landmarkInfo">
                            <p>Language: {props.currentLandmark.language}</p>
                            <p>Currency: {props.currentLandmark.currency}</p>
                            <p>Climate: {props.currentLandmark.climate}</p>
                        </div>
                        <div>
                            <img className="image2" width="200px" height="100px" src={props.currentLandmark.location} alt="landmark-location"/>
                        </div>
                        <div>
                            <p>{props.currentLandmark.desc}</p>
                        </div>
                    </div>
                    <div className={`title ${!showInfo ? 'name' : 'hideName'}`}>
                        <p className='title-name'>{props.currentLandmark.name}</p>
                        <p className='title-location'>{props.currentLandmark.city}, {props.currentLandmark.country}</p>
                    </div>
                    <div className="button" onClick={toggleInfo}>
                        <Compass />
                    </div>
                </>
    )
}