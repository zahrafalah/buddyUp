<<<<<<< HEAD
// top level layout: will include things like navbar, button placement, areas of text
import PropTypes from "prop-types";
import React, { Component } from "react";
import Menu from "../components/Menu";
import VerticalMenu from "../components/VerticalMenu";
import Event from "../components/Event";
=======
// top level layout: will include things like navbar, button placement, areas of text 
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Menu from '../components/Menu'
import VerticalMenu from '../components/VerticalMenu';
>>>>>>> 4d84344d6d08d82cb884e095471483373327b3f6

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
  Visibility
} from "semantic-ui-react";

class event extends React.Component {


state = {
    result: {},
    search: 
    };



searchEvents = query => {
     Meteor.call('geoJsonForIp', query, function (err, res) {
      // The method call sets the Session variable to the callback value
      if (err) { 
        Session.set('search', {error: err});
      } else {
        Session.set('search', res);
        return res;
      }
    });
  }

  handleInputChange = event => {
    const q = $(.)
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEvents(this.state.search);
  };



  render() {
    return;
    <Segment>
      <Container>
        <Menu />
      </Container>
      <Container>
        <div class="four wide column">
          <VerticalMenu />
        </div>
        <div class="12 wide column">
         <Event/>
        </div>
      </Container>
    </Segment>;
  }
}

export default event;
