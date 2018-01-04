import React from "react";
import { Switch, Route } from 'react-router-dom'

import Menu from "./menu";
import PlayerCreation from "./player/creation";
import Login from "./player/login";
import Status from "./player/status";
import QuestList from "./quest/list";


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
            <Route exact path='/status' component={Status}/>
            <Route exact path='/quest' component={QuestList}/>
          </Switch>
          </div>
        </div>
        )
  }
}

export default App;