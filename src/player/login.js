import React from "react";

class Login extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            login: { name: '', password: '' }
        }
    }
    changeState(event)
    {
        const change = {};
        change[event.target.name] = event.target.value
        const login = Object.assign(this.state.login, change)
        this.setState({login})
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
                onInput={event => this.changeState(event)} 
                placeholder="Ex: LordDestroyer" autoFocus/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" value={this.state.login.password}
                    name="password"
                    onInput={event => this.changeState(event)} 
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