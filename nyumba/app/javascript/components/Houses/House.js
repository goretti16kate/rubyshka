import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const House = (props) => {
    return (
        <div className = "card">
            <div className="house-logo">
                <img src={props.attributes.image_url} alt ={props.attributes.name}/>
            </div>
            <div className="house-name">{props.attributes.name}</div>
            <div className="house-score">{props.attributes.avg_score}</div>
            <div className="house-link">
                <Link to = {`/houses/${props.attributes.slug}`}>View House</Link>
            </div>
        </div>
    )
}

export default House