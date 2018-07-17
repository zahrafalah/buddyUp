import React from 'react';
import { Meteor } from 'meteor/meteor';

import { Component } from 'react';
import { Session } from 'meteor/session';

import {render} from 'react-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';




class aboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { lastName: '', bio: '', userId: '', firstName: '' }
      }


  
      render(){
        return(
         <Button></Button>
        )
      }
    }
    
    export default aboutMe;

