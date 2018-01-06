import React from "react";

import FormComponent from "../common/form-component";

class Login extends FormComponent
{
    constructor(props)
    {
        super(props, {entityName: "login"});
        this.state = {
            login: { name: '', password: '' }
        }
    }

    sendLoginRequest(){
        console.log(this.state.login);
        debugger;
    }

    render()
    {
        return (<div className="two-third card">
            <header>Login</header>
            <div>
                <label htmlFor="name">Player Name</label>
                <input type="text" 
                name="name"
                value={this.state.login.name} 
                onInput={event => this.changeEntityState(event)} 
                placeholder="Ex: LordDestroyer" autoFocus/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" value={this.state.login.password}
                    name="password"
                    onInput={event => this.changeEntityState(event)} 
                    placeholder="Ex: ******" />
            </div>
            <div>
                <button onClick={() => this.sendLoginRequest()} type="submit">
                    Login
                </button>
            </div>
        </div>)
    }    
}

export default Login;