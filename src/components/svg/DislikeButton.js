import React from 'react'

export default function DislikeButton(props) {
    return (
        <button className='dislike-button' onClick={props.swapLandmark}>
            <svg height={30} viewBox="0 0 21 21" width={30} xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#248BC5" strokeLinecap="round" strokeLinejoin="round" transform="translate(5 5)"><path d="m.5 10.5 10-10" /><path d="m10.5 10.5-10-10z" /></g></svg>
        </button>
    )
}