import React, {Component} from "react";
import {
    Button,
    Divider,
    Grid,
    Container,
    Header,
    Icon,
    Image,
    List,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Checkbox,
    Dropdown
} from "semantic-ui-react";


export const VerticalMenu = props => (

    <div className="ui vertical menu large categorieSearch">
        <div className='item'>
            <button
                onClick={this.props.handleFormSubmit}
                className="ui basic button item olive"
                name='refresh'>AnyBuddyUp?</button>
        </div>
        <div className="item ">
            <div className="ui input item">
                <label>Search
                </label>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.value}
                    type="text"
                    placeholder="Search for an Event..."
                    name="search"
                    type="text"
                    className="form-control "/>

            </div>
        </div>

        <div className="item checkboxes">
            Categories
            <div className="menu">
                <div className="ui checkbox item ">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="art"
                        value="art"/>
                    <label className=''>Art Galleries & Exhibits</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="outdoors_recreation"
                        value="outdoors-recreation"/>
                    <label>Outdoors & Recreation</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        type="checkbox"
                        name="food"
                        value="food"
                        checked={this.props.checked}
                        onChange={this.props.handleChange}/>
                    <label>Food & Wine</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="books"
                        value="books"/>
                    <label>Reading & Books</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="sports"
                        value="sports"/>
                    <label>Sports</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        type="checkbox"
                        name="science"
                        value="science"
                        checked={this.props.checked}
                        onChange={this.props.handleChange}/>
                    <label>Science</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="music"
                        value="music"/>
                    <label>Concerts & Tour Dates</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="animals"
                        value="animals"/>
                    <label>Pets</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="festivals_parades"
                        value="festivals_parades"/>
                    <label>Festivals</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="singles_social"
                        value="singles_social"/>
                    <label>Nightlife</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="fundraisers"
                        value="fundraisers"/>
                    <label>Volunteering</label>
                </div>
                <div className="ui checkbox item">
                    <input
                        checked={this.props.checked}
                        onChange={this.props.handleChange}
                        type="checkbox"
                        name="holiday"
                        value="holiday"/>
                    <label>Holiday</label>
                </div>
            </div>
        </div>
        <div className="item">
            Other:
            <div className="ui input item">
                <label>Zip Code</label>
                <input
                    onChange={this.props.handleChange}
                    value={this.props.value}
                    type="text"
                    placeholder="Search for Anything..."
                    name="zipCode"
                    type="text"
                    className="form-control"/>
            </div>
            <div className="ui selection item dropdown">
                <input
                    type="hidden"
                    name="within"
                    onChange={this.props.handleChange}
                    value={this.props.value}/>
                <i className="dropdown icon"></i>
                <div className="default text item">Distance</div>
                <select className="menu">
                    <option className="item" data-value="5">5 miles</option>
                    <option className="item" data-value="10">10 miles</option>
                    <option className="item" data-value="25">25 miles</option>
                    <option className="item" data-value="50">50 miles</option>
                    <option className="item" data-value="100">100 miles</option>
                </select>
            </div>
            <div className="ui selection item dropdown">
                <input
                    type="hidden"
                    name="date"
                    onChange={this.props.handleChange}
                    value={this.props.value}/>
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

)
