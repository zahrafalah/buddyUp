import React, {Component} from "react";
import AccountsUIWrapper from AccountsUIWrapper;

export const VerticalMenu = props => (render() {
    return (

        <div className="ui vertical menu categorieSearch">
            <div>
                <button
                    onClick={props.handleFormSubmit}
                    className="ui basic button"
                    name='refresh'>Refresh</button>
            </div>
            <div className="item">
                <div className="ui input">
                    <label>Search
                    </label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        type="text"
                        placeholder="Search for Anything..."
                        name="search"
                        type="text"
                        classNameName="form-control"/>

                </div>

                <div className="item">
                    Categories

                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="art"/>
                        <label>Arts</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="coffee"/>
                        <label>Coffee</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            type="checkbox"
                            name="food"
                            checked={this.state.checked}
                            onChange={this.handleInputChange}/>
                        <label>Food</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="reading"/>
                        <label>Reading & Books</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="sports"/>
                        <label>Sports</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            type="checkbox"
                            name="science"
                            checked={this.state.checked}
                            onChange={this.handleInputChange}/>
                        <label>Science</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="concert"/>
                        <label>Concerts</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="pets"/>
                        <label>Pets</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="festivals"/>
                        <label>festivals</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="happyHour"/>
                        <label>Happy Hour</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="volunteer"/>
                        <label>Volunteering</label>
                    </div>
                    <div className="ui checkbox">
                        <input
                            checked={this.state.checked}
                            onChange={this.handleInputChange}
                            type="checkbox"
                            name="holiday"/>
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
                            classNameName="form-control"/>
                        <div className="ui selection dropdown">
                            <input
                                type="hidden"
                                name="distance"
                                onChange={props.handleInputChange}
                                value={this.props.value}/>
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
                    </div>
                </div>
            </div>
        </div>
                
        </div>        


  
        ); 
    };
    
};

export default VerticalMenu;
