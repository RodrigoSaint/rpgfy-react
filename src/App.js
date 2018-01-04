import React from "react";
import PlayerCreation from "./player/creation";
import Login from "./player/login";
import Menu from "./menu";
import { Switch, Route } from 'react-router-dom'


class App extends React.Component
{
  render()
  {
    return (
        <div className="root">
          <Menu />
          <Route exact path='/roster'/>
          <div className="background-castle center-both background-full flex one">
          <Switch>
            <Route exact path='/' component={PlayerCreation}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
          </div>
        </div>
        )
  }
}

export default App;