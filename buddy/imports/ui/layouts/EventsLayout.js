// top level layout: will include things like navbar, button placement, areas of
// text
import PropTypes from "prop-types";
import React, {Component} from "react";
import Menu from "../components/Menu";
import {VerticalMenu} from "../components/VerticalMenu";
import {Event} from "../components/Event";
import {EventList} from "../components/EventList"
<<<<<<< HEAD
//import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
=======
import {addUrlProps, UrlQueryParamTypes} from 'react-url-query';
>>>>>>> 7a976683ca5099cc038fc9785a47ff11d24f1435
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

export default class EventsLayout extends React.Component {

    state = {
        result: {},
        search: '',
        arts: '',
        coffee: '',
        food: '',
        reading: '',
        sports: '',
        science: '',
        concert: '',
        pets: '',
        festivals: '',
        happyHour: '',
        volunteer: '',
        holiday: '',
        zipCode: '',
        distance: '' || 50,
        date: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.search);
    };

    loadEvents = () => {
        searchEvents()
            .then(res => this.setState({result: res.data.events.event}))
            .catch(err => console.log(err));
    };

    searchEvents = query => {

        Meteor
            .call('geoJsonForIp', query, function (err, res) {
                // The method call sets the Session variable to the callback value
                if (err) {
                    Session.set('result', {error: err});
                } else {
                    Session.set('result', res);
                    return res;
                }
            });
    }

    handleFormSubmit = event => {
        const queryURL = {}

        console.log(queryURL);

        event.preventDefault();
        this.loadEvents(queryURL);
    };

    render() {
        return (
            <Segment >
                <Container>
                    <Menu/>
                </Container>
                < Container >
                    <div className="four wide column">
                        <VerticalMenu/>
                    </div>
                    {this.state.result.length
                        ? (
                            <div className="twelve wide column">
                                <EventList>
                                    {this
                                        .state
                                        .result
                                        .map(events => (
                                            <Event>
                                                <div className="image">
                                                    <img src={events.image.medium.url}/>
                                                </div>
                                                <div className="content">
                                                    <h3 className="header">{events.title}</h3>
                                                    <div className="meta">
                                                        <span className="date">{events.start_date}</span>
                                                        <span className="location">{events.city_name}, {events.region_name}</span>
                                                    </div>
                                                    <div className="description">
                                                        <p>{events.description}</p>
                                                    </div>
                                                    <div className="extra">
                                                        <a href={events.url} target="_blank">Additional Details</a>
                                                        <div className="ui label category">Pending</div>
                                                    </div>
                                                </div>
                                            </Event>
                                        ))}
                                </EventList>
                            </div>
                        )
                        : (
                            <div className="ui red message">There is no Events Available with this Criteria</div>
                        )}
                </Container >

            </Segment>

        )
    }
}
