import React from "react";
import FormComponent from "../common/form-component";
import Player from "./model";
import ErrorComponent from "../common/error-component";

class PlayerCreation extends FormComponent
{
    constructor(props)
    {
        super(props, {entityName: "player"});
        this.state = {
            player: {name: "", email: "", password: "", playerClass: ""},
            validation: {}
        }
    }
    
    save()
    {
        this.setState({validation: Player.validation})
        Player.validate(this.state.player)
            .then(() => alert("sucess"))
            .catch(err => console.log(err))
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
                            onInput={event => this.changeEntityState(event)} 
                            placeholder="Ex: LordDestroyer"
                            name="name"
                            required 
                            autoFocus />
                        <ErrorComponent model={this.state.player} 
                            validation={this.state.validation} 
                            property="name" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input id="email"
                            type="email" 
                            placeholder="Ex: lord@gmail.com"
                            name="email"
                            value={this.state.player.email}
                            onInput={event => this.changeEntityState(event)} 
                            required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password"
                            type="password" 
                            placeholder="Ex: *******"
                            name="password"
                            value={this.state.player.password}
                            onInput={event => this.changeEntityState(event)} 
                            required />
                    </div>
                    <div>
                        <label htmlFor="class">Class</label>
                        <select
                            name="playerClass" 
                            value={this.state.player.playerClass} 
                            onInput={event => this.changeEntityState(event)} 
                            id="class">
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