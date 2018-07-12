// top level layout: will include things like navbar, button placement, areas of text
import PropTypes from "prop-types";
import React, { Component } from "react";
import Menu from "../components/Menu";
import VerticalMenu from "../components/VerticalMgit enu";
import Event from "../components/Event";

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
    search: {}
}
  constructor () {
    super();
    this.state.search = {
      search: '',
      arts:'',
      coffee: '',
      food:'',
      reading:'',
      sports:'',
      science:'',
      concert:'',
      pets:'',
      festivals:'',
      happyHour:'',
      volunteer:'',
      holiday:'',
      zipCode:'',
      distance:''|| 50,
     
    };
  }

  var query = '&q=' + this.search.search + 
   



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
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      q: event.target.
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
