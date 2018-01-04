import React from "react";

class Status extends React.Component
{
    constructor(){
        super();
        this.state = {
            player: {name: "", level: 1, experience: 0}
        }
    }
    render(){
        return (
            <div className="two-third card">
                <header>Status</header>
                <div>
                    <div className="flex one">
                        <div>
                        <strong>Name:</strong> {this.state.player.name}
                        </div>
                        <div>
                        <strong>LV: </strong> {this.state.player.level}
                        </div>
                        <div>
                    <strong>EXP: </strong> {this.state.player.experience}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Status;