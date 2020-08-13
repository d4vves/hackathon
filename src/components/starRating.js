import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'



const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return (
    <div className='star-row'>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1

            return (
                <label>
                    <input 
                    className='radio'
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)} 
                    />
                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? '#c2e1f3' : 'Grey'} 
                    size={15}
                    onMouseEnter={() => setHover(ratingValue)} 
                    onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
    </div>
    )
}

export default StarRating