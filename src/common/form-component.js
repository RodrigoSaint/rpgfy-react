import React from "react";

class FormComponent extends React.Component
{
    constructor(props, config)
    {
        super(props);
        this.entityName = config.entityName;
    }

    changeEntityState(event)
    {
        const change = {};
        change[event.target.name] = event.target.value
        const entity = Object.assign(this.state[this.entityName], change)
        var newState = {};
        newState[this.entityName] = entity;
        this.setState(newState)
    }
}
export default FormComponent;