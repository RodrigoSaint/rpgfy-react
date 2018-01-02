var validateJs = require('validate.js');

function Player() 
{
    
}

Player.validation = {
    name: {
        presence: {allowEmpty :false},
        length: {maximum: 20, minimum: 3}
    },
    email: {
        presence: {allowEmpty :false},
        email: true
    },
    password: {
        presence: {allowEmpty :false}                    
    },
    playerClass: {
        presence: {allowEmpty :false}                    
    }
}

Player.validate = function validate(playerToValidate)
{
    return validateJs.async(playerToValidate, Player.validation);
}

export default Player;