import React, {Component} from "react";

export const VerticalMenu = props => (render() {
    return (

    <div class="ui vertical menu categorieSearch">
    <div>
        <button onClick={props.handleFormSubmit} class="ui basic button" name='refresh'>Refresh</button>
    </div>
    <div class="item">
        <div class="ui input">
            <label>Search
            </label>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                type="text"
                placeholder="Search for an Event..."
                name="search"
                type="text"
                className="form-control"/>

        </div>
    </div>

    <div class="item">
        Categories

    };
    
};

export default VerticalMenu
