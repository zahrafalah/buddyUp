import React, {Component} from "react";
import AccountsUIWrapper from AccountsUIWrapper;

class VerticalMenu extends Component {

    render() {
        return( 
        
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
                        placeholder="Search for Anything..."
                        name="search"
                        type="text"
                        className="form-control"/>

                </div>

                <div class="item">
                    Categories

                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="art"/>
                        <label>Arts</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="coffee"/>
                        <label>Coffee</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            type="checkbox"
                            name="food"
                            checked={this.state.checked}
                            onChange={this.handleInputChange}/>
                        <label>Food</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="reading"/>
                        <label>Reading & Books</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="sports"/>
                        <label>Sports</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            type="checkbox"
                            name="science"
                            checked={this.state.checked}
                            onChange={this.handleInputChange}/>
                        <label>Science</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="concert"/>
                        <label>Concerts</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="pets"/>
                        <label>Pets</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="festivals"/>
                        <label>festivals</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="happyHour"/>
                        <label>Happy Hour</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="volunteer"/>
                        <label>Volunteering</label>
                    </div>
                    <div class="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="holiday"/>
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
                        <div class="ui selection dropdown">
                            <input
                                type="hidden"
                                name="distance"
                                onChange={props.handleInputChange}
                                value={this.props.value}/>
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
                    </div>
                </div>
            </div>
            </div>
        );

    };
}
