import React from "react";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

import FormComponent from "../common/form-component";
import StarRating from "../common/star-rating";
import MonsterSelection from "./monster-selection";

class QuestCreation extends FormComponent
{
    constructor(){
        super(undefined, {entityName: "quest"});
        this.state = {
            quest: {
                title: "",
                dueDate: undefined,
                mob: undefined,
                description: "",
                difficulty: 3
            }
        }
    }

    updateDifficulty(newDifficulty)
    {
        const quest = Object.assign({}, this.state.quest, {difficulty: newDifficulty})
        this.setState({quest})
    }

    updateDueDate(dueDate)
    {
      const quest = Object.assign({}, this.state.quest, {dueDate})
      this.setState({quest})
    }

    render(){
        return (<div className="two-third card">
        <header>Quest Creation</header>
        <div>
          <div className="flex two">
            <div>
              <label htmlFor="title">Title</label>
              <input id="title" 
                type="text" 
                name="title"
                value={this.state.quest.title}
                placeholder="Ex: Search ruins"
                onInput={event => this.changeEntityState(event)}
                autoFocus/>
              {/* <error-component property-name="title" model="quest" validation="validation"/> */}
            </div>
            <div>
              <label htmlFor="difficulty">Difficulty</label>
              <StarRating max="5" selected={this.state.quest.difficulty} 
                onClick={difficulty => this.updateDifficulty(difficulty)}/>
              <star-rating selected={this.state.quest.difficulty}/>
              {/* <error-component property-name="difficulty" model="quest" validation="validation"/> */}
            </div>
            <div>
              <label htmlFor="due-date">Due date</label>
              <DatePicker
                  selected={this.state.quest.dueDate}
                  onChange={date => this.updateDueDate(date)}/>
              {/* <error-component property-name="dueDate" model="quest" 
                validate-config="validateConfig" validation="validation"/> */}
            </div>
            <div>
              <label htmlFor="select-mob">Select Mob</label>
              <MonsterSelection />
              <error-component property-name="mob" model="quest" validation="validation"/>
            </div>
            <div className="full">
              <label htmlFor="description">Description</label>
              <textarea id="description" 
                value={this.state.quest.description}
                name="description"
                placeholder="Ex: Search ruins for treasures!"
                onInput={event => this.changeEntityState(event)}
                v-model="quest.description"></textarea>
              <error-component property-name="description" model="quest" validation="validation"/>
            </div>
          </div>
        </div>
        <footer>
          <button type="submit">
            Save
          </button>
        </footer>
      </div>)
    }
}

export default QuestCreation