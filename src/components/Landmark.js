import React, { useState } from 'react'
import Compass from './Compass'


export default function Landmark(props) {

    const [showInfo, setShowInfo] = useState(false)

    function toggleInfo() {
        setShowInfo(!showInfo)
    }

    //     this.showInfo = this.showInfo.bind(this)
    //     this.closeInfo = this.closeInfo.bind(this)

    // showInfo(event) {
    //     event.preventDefault()


    //     this.setState({ showInfo: true }, () => {
    //         document.addEventListener('click', this.closeInfo)
    //     })
    // }

    // closeInfo(event) {
    //     if (!this.dropdownMenu.contains(event.target)) {
    //         this.setState({ showInfo: false }, () => {
    //             document.removeEventListener('click', this.closeInfo)
    //         } )
    //     }
    // }

    // showInfo(event) {
    //     event.preventDefault()
    //     this.setState({
    //         showInfo: true
    //     })
    // }
    return (
        <div>
            <div className="background">
                <img src={""} />
            </div>
            <div className={`${showInfo ? 'info' : 'hideInfo'}`}>
                <div className>
                    <span>{props.name}HELLO</span>
                    <span>{props.location}</span>
                </div>
                <div className className>
                    <span>{props.desc}</span>
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



// show-description 
// info {opacity: 100;}

