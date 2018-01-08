import React from "react";
import Star from "./star";

const StarRating = props => {
    const starCollection = [];
    const max = props.max? props.max : 5;
    for (let index = 1; index <= max; index++) 
        starCollection.push(<Star key={index} 
            onClick={props.onClick}
            value={index} 
            selected={props.selected} />)
    return (
        <div>
            {starCollection}
        </div>
    )
}

export default StarRating;