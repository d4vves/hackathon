import React from 'react'
import LandmarkCard from './LandmarkCard'

export default function Profile(props) {
    let landmarkList = props.favoriteLandmarks.length < 1 ?
    <h3>No favorite landmarks.</h3> :
    props.favoriteLandmarks.map(landmark => (
        <LandmarkCard {...landmark} />
    ))
    console.log(landmarkList)
    return (
        <div>
            <h3 className='profile-header'>Where I'm Headed</h3>
            {landmarkList}
        </div>
    )
}