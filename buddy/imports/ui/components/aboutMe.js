import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Component } from 'react';
import {render} from 'react-dom';
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor';


class aboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = { lastName: '', bio: '', userId: '', firstName: '' }
  }

  render(){
    return(
      <Button> </Button>
    )
  }
}

export default aboutMe;

