import React from "react";

const Popup = props => {
    return (
        <div>
            <label htmlFor={props.id} className="button">Select mob</label>
            <div className="modal">
                <input id={props.id} type="checkbox" />
                <label htmlFor={props.id} className="overlay"></label>
                <div>{props.children}</div>
            </div>
        </div>
    )
}

export default Popup;