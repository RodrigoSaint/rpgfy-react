import React from "react";
import Popup from "../common/popup";

class QuestPopup extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return (
            <Popup id="quest-popup">
                <header>
                <h3>{this.props.quest.title}</h3>
                <label htmlFor="quest-popup" className="close">&times;</label>
                </header>
                <section style={{display:"inline-block"}} className="content">
                    <div style={{float: "left", marginRight: "10px"}}>
                        <img src={this.props.quest.mob.image} alt={this.props.quest.title} className="quest-image"/ >   
                        <div style={{margin:"auto"}}>
                            <star-rating disabled="true" v-model="quest.difficulty"></star-rating>
                        </div>
                    </div>
                    <strong>{this.props.quest.mob.name}</strong>
                    <div>{this.props.quest.mob.description}</div>
                    <strong>Description</strong>
                    <div>{this.props.quest.description}</div>
                </section>
                <footer>
                <button className="success">Fight</button>
                <button className="warn">Run</button>
                <button className="error">Give up</button>
                </footer>
            </Popup>
        )
    }
}

export default QuestPopup;