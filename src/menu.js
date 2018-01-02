import React from "react";

class Menu extends React.Component
{
    get isLogged(){
        return false;
    }

    get linkList(){
        if(this.isLogged) return [
                {icon: "icon sword", title: 'Status', link: "#/status"},
                {icon: "icon book", title: 'Quest', link: "#/quest"}
        ]
        
        return [ {icon: "icon power", title: 'Sign in', link: "#/"},
            {icon: "icon map-old", title: 'Login', link: "#/login"}]
        
    }

    render()
    {
        return (<nav className="demo">
            <a href="#" className="brand">
            <img className="logo" src="/web/img/basket.png" />
            <span>RPGfy</span>
            </a>
    
            <input id="bmenub" type="checkbox" className="show" />
            <label htmlFor="bmenub" className="burger pseudo button">Menu</label>
            <div className="menu">
                {this.linkList.map(link => (
                    <a href={link.link} className="pseudo button"><div className={link.icon}></div>{link.title}</a>
                ))}
            </div>
    
        </nav>)
    }
}
export default Menu;