import React from 'react'
import LikeButton from './svg/LikeButton'
import DislikeButton from './svg/DislikeButton'

export default function Buttons(props) {
    return (
        <div>
            <DislikeButton swapLandmark={props.swapLandmark} />
            <LikeButton addLandmark={props.addLandmark} />
        </div>
    )
}