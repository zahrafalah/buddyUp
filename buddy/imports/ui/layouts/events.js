// top level layout: will include things like navbar, button placement, areas of text
import PropTypes from "prop-types";
import React, {Component} from "react";
import Menu from "../components/Menu";
import VerticalMenu from "../components/VerticalMgit enu";
import Event from "../components/Event";
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
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
        },
        category: {
            type: UrlQueryParamTypes.string,
            queryParam:join(Object.value(this.state.search))
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
    );
};

};

export default event;
