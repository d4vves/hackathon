import StarRatings from './react-star-ratings'

export default function Star() {
    function changeRating( newRating, name) {
        this.setState({
            rating: newRating
        })
    }
    return() {
        <StarRatings
        rating={this.state.rating}
        starRatedColor="gold"
        starEmptyColor="grey"
        changeRating={this.changeRating}
        numberOfStars={5}
        name='rating'
        />
    }
}

export default function Rating() {
    return (
        <StarRatings
        rating={2.403}
        starDimension="30px"
        starSpacing="15px"
        />
    )
}