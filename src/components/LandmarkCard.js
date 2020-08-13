import React from 'react'
import StarRating from './starRating'

export default function LandmarkCard(props) {
    return (
        <div className='landmark-card'>
            <div className='landmark-image'>
                <img src={props.image} />
            </div>
            <div className='landmark-info'>
                <h4>{props.name}</h4>
                    <p className='landmark-location'>
                        <img src='https://image.flaticon.com/icons/svg/117/117479.svg' width='15px'/>
                        {props.city}, {props.country}
                    </p>
                <p className='landmark-description'>{props.desc.substring(0, 20)}...</p>
                <StarRating />
            </div>

        </div>
    )
}