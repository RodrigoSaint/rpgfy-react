import React from "react";
import ValidateJs from "validate.js";

class ValidateJsErrorMessage 
    extends React.Component
{
    get validationResult()
    {
        const model = this.props.model;
        const property = this.props.property;
        const fullValidation = this.props.validation;

        let value = {};
        value[property] = model[property];

        let validation = {};
        validation[property] = fullValidation[property];

        let result = ValidateJs.validate(value, validation);
        return result? result[property] : undefined;
    }

    get errorMessage()
    {
        const validationResult = this.validationResult;
        return validationResult? validationResult[0] : "";
    }

    render()
    {
        return (<span className="error-message">{this.errorMessage}</span>)
    }
}
export default ValidateJsErrorMessage;