// top-level page, will call layout inside of here and I'm thinking logic will
// happen here?
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import EventsLayout from '../layouts/EventsLayout'

import {
    Button,
    Divider,
    Grid,
    Container,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility
} from 'semantic-ui-react'



class EventsPage extends Component {

    render() {
        return(
          <EventsLayout/>
        );

    };
}
export default EventsPage;
