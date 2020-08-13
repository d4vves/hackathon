import React from 'react'

export default function LikeButton(props) {
    return (
        <button className='like-button' onClick={props.addLandmark}>
            <svg height={30} viewBox="0 0 21 21" width={30} xmlns="http://www.w3.org/2000/svg"><path d="m.5 5.5 3 3 8.028-8" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 6)" /></svg>
        </button>
    )
}