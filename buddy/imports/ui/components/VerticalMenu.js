import React, {Component} from "react";

export const VerticalMenu = props => (

    <div className="ui vertical menu categorieSearch">
    <div>
        <button onClick={props.handleFormSubmit} className="ui basic button" name='refresh'>Refresh</button>
    </div>
    <div className="item">
        <div className="ui input">
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

    <div className="item">
        Categories

        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="art"
                value="art"/>
            <label>Art Galleries & Exhibits</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="outdoors_recreation"
                value="outdoors-recreation"/>
            <label>Outdoors & Recreation</label>
        </div>
        <div className="ui checkbox">
            <input
                type="checkbox"
                name="food"
                value="food"
                checked={props.checked}
                onChange={props.handleInputChange}/>
            <label>Food & Wine</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="books"
                value="books"/>
            <label>Reading & Books</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="sports"
                value="sports"/>
            <label>Sports</label>
        </div>
        <div className="ui checkbox">
            <input
                type="checkbox"
                name="science"
                value="science"
                checked={props.checked}
                onChange={props.handleInputChange}/>
            <label>Science</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="music"
                value="music"/>
            <label>Concerts & Tour Dates</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="animals"
                value="animals"/>
            <label>Pets</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="festivals_parades"
                value="festivals_parades"/>
            <label>Festivals</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="singles_social"
                value="singles_social"/>
            <label>Nightlife</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="fundraisers"
                value="fundraisers"/>
            <label>Volunteering</label>
        </div>
        <div className="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="holiday"
                value="holiday"/>
            <label>Holiday</label>
        </div>
    </div>
    <div className="item">
        Other:
        <div className="ui input">
            <label>Zip Code</label>
            <input
                onChange={props.handleInputChange}
                value={props.value}
                type="text"
                placeholder="Search for Anything..."
                name="zipCode"
                type="text"
                className="form-control"/>
        </div>
        <div className="ui selection dropdown">
            <input
                type="hidden"
                name="within"
                onChange={props.handleInputChange}
                value={props.value}/>
            <i className="dropdown icon"></i>
            <div className="default text">Distance</div>
            <div className="menu">
                <div className="item" data-value="5">5 miles</div>
                <div className="item" data-value="10">10 miles</div>
                <div className="item" data-value="25">25 miles</div>
                <div className="item" data-value="50">50 miles</div>
                <div className="item" data-value="100">100 miles</div>
            </div>
        </div>
        <div className="ui selection dropdown">
            <input
                type="hidden"
                name="date"
                onChange={props.handleInputChange}
                value={props.value}/>
            <i className="dropdown icon"></i>
            <div className="default text">When</div>
            <div className="menu">
                <div className="item" data-value="today">Today</div>
                <div className="item" data-value="This Week">This Week</div>
                <div className="item" data-value="Next Week">Last Week</div>
                <div className="item" data-value="All">See All</div>
             
            </div>
        </div>
                
                


    </div>

</div>
);
