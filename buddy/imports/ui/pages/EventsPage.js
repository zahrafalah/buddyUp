// top-level page, will call layout inside of here and I'm thinking logic will
// happen here?
import PropTypes from "prop-types";
import React, {Component} from "react";
import {Event} from "../components/Event";
import {EventList} from "../components/EventList"
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import {
    Button,
    Form,
    Divider,
    Grid,
    Container,
    Header,
    Icon,
    Image,
    Menu,
    Input,
    List,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Select,
    Label
} from "semantic-ui-react";

const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
            fontSize: mobile
                ? '2em'
                : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile
                ? '1.5em'
                : '3em'
        }}/>
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
            fontSize: mobile
                ? '1.5em'
                : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile
                ? '0.5em'
                : '1.5em'
        }}/>
        <Button primary size='huge'>
            Get Started
            <Icon name='right arrow'/>
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool
}

/* Heads up!
   * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
   * It can be more complicated, but you can create really flexible markup.
   */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {
        const {children} = this.props
        const {fixed} = this.state

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{
                        minHeight: 70,
                        padding: '1em 0em'
                    }}
                        vertical>
                        <Menu
                            fixed={fixed
                            ? 'top'
                            : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'>
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a' active>Event</Menu.Item>
                                <Menu.Item as='a'></Menu.Item>
                                <Menu.Item as='a'></Menu.Item>
                                {/* <Menu.Item position='right'> */}
                                {/* <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button> */}
                                {/* </Menu.Item> */}
                            </Container>
                        </Menu>
                        {/* <HomepageHeading /> */}
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node
}

class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const {sidebarOpened} = this.state

        if (sidebarOpened) 
            this.setState({sidebarOpened: false})
    }

    handleToggle = () => this.setState({
        sidebarOpened: !this.state.sidebarOpened
    })

    render() {
        const {children} = this.props
        const {sidebarOpened} = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='uncover'
                        inverted
                        vertical
                        visible={sidebarOpened}>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{
                        minHeight: '100vh'
                    }}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{
                            minHeight: 350,
                            padding: '1em 0em'
                        }}
                            vertical>
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar'/>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            {/* <HomepageHeading mobile /> */}
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node
}

const ResponsiveContainer = ({children}) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node
}

export default class EventsPage extends React.Component {

    state = {
        results: [],
        search: '',
        categories: [],
        zipCode: '',
        distance: '',
        date: '',
        activeItem: ''
    };

    /*handleClick(type) {
        // make request to server
      /*  setTimeout(() => {
            this.setState({
                [type]: !this.state[type]
            })
        }, 1000)
    };*/

    handleChange = event => {

        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    categoriesChanged = (value) => {
        this.setState({categories: value});
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        console.log(this.state);

        const {activeItem} = this.state;

        return (
            <ResponsiveContainer>
                <Segment
                    style={{
                    padding: '3em 0em'
                }}
                    vertical>
                    <Grid container verticalAlign='middle'>
                        <Grid.Column width={4}>

                            <Form>

                                <Button
                                    attached='top'
                                    style={{
                                    padding: '.5em 3em',
                                    verticalAlign: 'center'
                                }}
                                    size='large'
                                    color='black'
                                    content='Search Events'
                                    onClick={this.handleClick}/>

                                <Form.Field
                                    placeholder='Search...'
                                    control='input'
                                    name='search'
                                    value={this.state.search}
                                    onChange={this.handleChange}/>

                                <Form.Group>
                                    Categories
                                    <CheckboxGroup
                                    style={{margin:'.5em'}}
                                    checkboxDepth={3}
                                    name="categories"
                                    value={this.state.categories}
                                    onChange={this.categoriesChanged}>
                                    <br/><span/>
                                    <label><Checkbox value="animals"/>Pets</label>
                                    <br/><span/>
                                    <label><Checkbox value="art"/>
                                        Arts</label>
                                    <br/><span/>
                                    <label><Checkbox value="books"/>Books & Literature</label>
                                    <br/><span/>
                                    <label><Checkbox value="festivals_parades"/>Festivals</label>
                                    <br/><span/>
                                    <label><Checkbox value="food"/>Food & Wine</label>
                                    <br/><span/>
                                    <label><Checkbox value="fundraisers"/>Fundraising & Charity</label>
                                    <br/><span/>
                                    <label><Checkbox value="holiday"/>Holidays</label>
                                    <br/><span/>
                                    <label><Checkbox value="music"/>Concerts & Tour Dates</label>
                                    <br/><span/>
                                    <label><Checkbox value="outdoors_recreation"/>Outdoors & Recreations</label>
                                    <br/><span/>
                                    <label><Checkbox value="science"/>Science</label>
                                    <br/><span/>
                                    <label><Checkbox value="single_social"/>Night life</label>
                                    <br/><span/>
                                    <label><Checkbox value="sports"/>Sports</label>
                                </CheckboxGroup>
                                </Form.Group>

                                <Form.Field
                                    placeholder='Zipcode...'
                                    control='input'
                                    name='zipCode'
                                    value={this.state.zipCode}
                                    onChange={this.handleChange}/>
                                <Form.Field>
                                    <select
                                        name='distance'
                                        placeholder='Distance'
                                        value={this.state.value}
                                        onChange={this.handleChange}>
                                        <option value=" ">Distance</option>
                                        <option value="5">5 Miles</option>
                                        <option value="10">10 Miles</option>
                                        <option value="25">25 Miles</option>
                                        <option value="50">50 Miles</option>
                                    </select>
                                </Form.Field>
                                <Form.Field>
                                    <select
                                        name='date'
                                        placeholder='When'
                                        value={this.state.value}
                                        onChange={this.handleChange}>
                                        <option value="">When?</option>
                                        <option value="today">Today</option>
                                        <option value="this week">This Week</option>
                                        <option value="next week">Next Week</option>
                                        <option value="all">All</option>
                                    </select>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Menu pointing secondary>
                                <Menu.Item
                                    name='Events'
                                    active={activeItem === 'Events'}
                                    onClick={this.handleItemClick}/>

                                <Menu.Item
                                    name='My Saved Events'
                                    active={activeItem === 'My Saved Events'}
                                    onClick={this.handleItemClick}/>
                            </Menu>
                            <Segment>
                                <EventList>
                                    <Event/>
                                </EventList>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </ResponsiveContainer>
        );
    }
}