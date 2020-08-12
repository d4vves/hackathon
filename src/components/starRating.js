import StarRatings from './react-star-ratings'

class Star extends Component {
    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        })
    }
    render() {
        return (
            <StarRatings
                rating={this.state.rating}
                starRatedColor="gold"
                starEmptyColor="grey"
                changeRating={this.changeRating}
                numberOfStars={5}
                name='rating'
            />

        )

    }
}

class Rating extends Component {
    render() {
        return (
            <StarRatings
                rating={2.403}
                starDimension="30px"
                starSpacing="15px"
            />
        )
    }
}