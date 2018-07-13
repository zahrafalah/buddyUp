import React, {Component} from "react";

export const VerticalMenu = props => (

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

        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="art"
                value="art"/>
            <label>Art Galleries & Exhibits</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="outdoors_recreation"
                value="outdoors-recreation"/>
            <label>Outdoors & Recreation</label>
        </div>
        <div class="ui checkbox">
            <input
                type="checkbox"
                name="food"
                value="food"
                checked={props.checked}
                onChange={props.handleInputChange}/>
            <label>Food & Wine</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="books"
                value="books"/>
            <label>Reading & Books</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="sports"
                value="sports"/>
            <label>Sports</label>
        </div>
        <div class="ui checkbox">
            <input
                type="checkbox"
                name="science"
                value="science"
                checked={props.checked}
                onChange={props.handleInputChange}/>
            <label>Science</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="music"
                value="music"/>
            <label>Concerts & Tour Dates</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="animals"
                value="animals"/>
            <label>Pets</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="festivals_parades"
                value="festivals_parades"/>
            <label>Festivals</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="singles_social"
                value="singles_social"/>
            <label>Nightlife</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="fundraisers"
                value="fundraisers"/>
            <label>Volunteering</label>
        </div>
        <div class="ui checkbox">
            <input
                checked={props.checked}
                onChange={props.handleInputChange}
                type="checkbox"
                name="holiday"
                value="holiday"/>
            <label>Holiday</label>
        </div>
    </div>
    <div class="item">
        Other:
        <div class="ui input">
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
        <div class="ui selection dropdown">
            <input
                type="hidden"
                name="within"
                onChange={props.handleInputChange}
                value={props.value}/>
            <i class="dropdown icon"></i>
            <div class="default text">Distance</div>
            <div class="menu">
                <div class="item" data-value="5">5 miles</div>
                <div class="item" data-value="10">10 miles</div>
                <div class="item" data-value="25">25 miles</div>
                <div class="item" data-value="50">50 miles</div>
                <div class="item" data-value="100">100 miles</div>
            </div>
        </div>
        <div class="ui selection dropdown">
            <input
                type="hidden"
                name="date"
                onChange={props.handleInputChange}
                value={props.value}/>
            <i class="dropdown icon"></i>
            <div class="default text">When</div>
            <div class="menu">
                <div class="item" data-value="today">Today</div>
                <div class="item" data-value="This Week">This Week</div>
                <div class="item" data-value="Next Week">Last Week</div>
                <div class="item" data-value="All">See All</div>
             
            </div>
        </div>
    </div>

</div>
);