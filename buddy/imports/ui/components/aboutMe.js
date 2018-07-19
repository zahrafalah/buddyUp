import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Component } from 'react';
import {render} from 'react-dom';
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {      
                  firstName: this.state.firstName,  
                  lastName: this.state.lastName, 
                  bio: this.state.bio
                 }
  }

  render(){
    return(
      <toggle>
        <div className="ui segment success">
          <form className="ui form" >
            <h4 className="ui dividing header">Personal Information</h4>

            <div className="field">
              <label>Name</label>
              <div className="two fields">
                <div className="field">
                  <h1>{this.state.firstName}</h1>
                </div>
                <div className="field">
                  <h2>{this.state.lastName}</h2>
                </div>
              </div>
            </div>

            <div className="field">
                  <label>Bio</label>
                  <h3>{}</h3>
            </div>

            <div className="ui button" tabIndex="0" onClick={this.handleEdit}>Edit</div>
          </form>

        </div>
      </toggle>
    )
  }
}

export default AboutMe;

