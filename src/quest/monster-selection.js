import React from "react";
const MonsterSelectionDisplay = props => 
{
    const selectMonster = props => {if (props.onClick) props.onClick(props)}
    return (<div className="component-row" click={selectMonster} >
        <img src={props.image} alt={props.name} /> 
        <h3><div className="icon star-unselected"></div>{props.name}</h3>
        <p>{props.description}</p>
    </div>)
}

class MonsterSelection extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            mobCollection: [{"name": "Mob 1", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 2", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 3", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 4", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 5", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 6", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"},
            {"name": "Mob 7", "description": "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.", "image": "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"}]        
        }
    }

    render()
    {
        const mobCollection = this.state
            .mobCollection.map(mob => <MonsterSelectionDisplay {...mob} />);
        return (<div>
            <label htmlFor="modal_1" className="button">Select mob</label>
            <div className="modal">
                <input id="modal_1" type="checkbox" />
                <label htmlFor="modal_1" className="overlay"></label>
                <div>
                    <header>
                        <h3><div className="icon dragon-mob"></div>Monster Selection</h3>
                        <label htmlFor="modal_1" className="close">&times;</label>
                    </header>
                    <div style={{padding: "1em"}}>
                        <div className="flex one">
                            <input v-model="filter" type="text" placeholder="Filter"/>
                            {mobCollection}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}

export default MonsterSelection;
