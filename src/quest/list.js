import React from "react";

const QuestCard = (props) => 
{
    return (<div className="quest" >
        <div className="card" >
            <header>
                <h3>{props.quest.title}</h3>
            </header>
            <img src={props.quest.mob.image} alt={props.quest.title} className="quest-image"/>
            <footer>
                {/* <star-rating disabled="true" v-model="quest.difficulty"></star-rating> */}
            </footer>
        </div>
    </div>)
}

class QuestList extends React.Component
{
    constructor(){
        super();
        this.state = {
            questCollecion: [{
                "_id" : "5a49377cb48a0a2d4c1d43fe",
                "title" : "My quest",
                "description" : "My quest",
                "difficulty" : 4,
                "dueDate" : new Date("2018-01-10T19:15:00.000Z"),
                "userId" : "5a493741b48a0a2d4c1d43fd",
                "status" : 2,
                "mob" : {
                    "name" : "Mob 3",
                    "description" : "It is a dragon that breaths fire and has sharp claws. It is a difficult task only selected for the best heroes.",
                    "image" : "http://cyanyurikago.web.fc2.com/images/cuelebre.png?16970772"
                }
            }]
        }
    }
    render()
    {
        return (
            <div className="two-third semi-transparent-background basic-spacing">
                <div style={{marginRight: '10px'}}>
                    <h1>Quest List</h1>
                    <a href="#/quest/create">Create Quest</a>
                    <hr />
                </div>
                <div className="flex three quest-list-page">
                    {this.state.questCollecion.map(quest => <QuestCard key={quest._id} quest={quest}/>)}
                </div>
        </div>)
    }
}
export default QuestList;