import React from "react";

const Star = props => 
{
    const className = props.value <= props.selected? "icon star" : "icon star unselected";
    const clickHandler = () => {if(props.onClick) props.onClick(props.value) };
    return (
        <div className={className} onClick={clickHandler}></div>
    );
}

export default Star;