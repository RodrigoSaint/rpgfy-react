import React from "react";

class PlayerCreation extends React.Component
{
    constructor()
    {
        super();
        this.state = {player: {name: "", email: "", password: ""}}
    }
    save()
    {

    }

    changeState(event)
    {
        const change = {};
        change[event.target.name] = event.target.value
        const newPlayer = Object.assign(this.state.player, change)
        this.setState({player: newPlayer})
        console.log(this.state.player)
    }

    render()
    {
        return (
            <div className="card two-third">
                <header>User Creation</header>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name"
                            value={this.state.player.name}
                            onInput={event => this.changeState(event)}
                            placeholder="Ex: LordDestroyer"
                            name="name"
                            required 
                            autoFocus />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id="email"
                            type="email" 
                            placeholder="Ex: lord@gmail.com"
                            name="email"
                            value={this.state.player.email}
                            onInput={event => this.changeState(event)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password"
                            type="password" 
                            placeholder="Ex: *******"
                            name="password"
                            value={this.state.player.password}
                            onInput={event => this.changeState(event)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="class">Class</label>
                        <select v-model="player.playerClass" id="class">
                            <option value="">Select a class</option>
                            <option value="1">Warrior</option>
                            <option value="2">Ranger</option>
                            <option value="3">Mage</option>
                            <option value="4">Priest</option>
                        </select>
                    </div>
                </div>
                <footer>
                    <button onClick={() => this.save()} type="submit">
                        Save
                    </button>
                </footer>
            </div>
        )
    }
}
export default PlayerCreation;