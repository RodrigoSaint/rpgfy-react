import React from "react";
import PlayerCreation from "./player/creation";
import Menu from "./menu";

class App extends React.Component
{
  render()
  {
    return (
        <div className="root">
          <Menu />
          <div className="background-castle center-both background-full flex one">
            <PlayerCreation />
          </div>
        </div>
        )
  }
}

export default App;