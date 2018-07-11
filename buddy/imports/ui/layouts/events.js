// top level layout: will include things like navbar, button placement, areas of text
import PropTypes from "prop-types";
import React, { Component } from "react";
import Menu from "../components/Menu";
import VerticalMenu from "../components/VerticalMenu";
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

<<<<<<< HEAD
    state = {
        result: {},
        search: []
    };

    constructor(props) {

        super(props);

        this.state.search = {
            search: '',
            animals: '',
            art: '',
            books: '',
            festivals_parades: '',
            food: '',
            fundraisers: '',
            holiday: '',
            music: '',
            outdoors_recreation: '',
            science: '',
            singles_social: '',
            sports: '',
            location: '',
            distance: ''
        };

        this.handleChange = this
            .handleChange
            .bind(this);

    };

    handleChange(event) {
        this
            .search
            .setState({
                [event.target.name]: event.target.value
            });
    };

    searchEvents = query => {

        Meteor
            .call('geoJsonForIp', query, function (err, res) {
                // The method call sets the Session variable to the callback value
                if (err) {
                    Session.set('search', {error: err});
                } else {
                    Session.set('search', res);
                    return res;
                }
            });
    }

    handleFormSubmit = event => {
        const queryURL = {
            search: {
                type: UrlQueryParamTypes.string,
                queryParam: this.state.search.search
            },
            'ex-category': {
                type: UrlQueryParamTypes.string,
                queryParam: 'attractions,comedy,community,family_fun_kids,movies_film,performing_arts,schools' +
                        '_alumni,support,technology'
            },
            location: {
                type: UrlQueryParamTypes.string,
                queryParam: this.state.search.location
            },
            distance: {
                type: UrlQueryParamTypes.string,
                queryParam: this.state.search.distance
            }
        };
        event.preventDefault();

        this.searchEvents(queryURL);
    };

    render() {
        return (
            <Segment >
                <Container>
                    <Menu/>
                </Container>
                < Container >
                    <div class="four wide column">
                        <VerticalMenu/>
                    </div>
                    < div class="12 wide column">
                        <Event/>{children}</div>
                </Container >
            </Segment>
        )
    }
=======

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
>>>>>>> d6207fe... update eventful api setup
}

export default event;
