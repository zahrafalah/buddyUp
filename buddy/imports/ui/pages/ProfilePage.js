import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,

  Visibility,
} from 'semantic-ui-react'
import {addProfile} from '../../api/profiles/methods'

/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 70, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a' active>Event</Menu.Item>
                <Menu.Item as='a' active>My Profile</Menu.Item>
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
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
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
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  {/* <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item> */}
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
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class ProfilePageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      bio: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(type) {
    // make request to server
    setTimeout(() => {
      this.setState({
        [type]: !this.state[type]
      })
    }, 1000)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {

      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bio: this.state.bio,
      sports: this.state.sports,
      books: this.state.books,
      food: this.state.food,
      art: this.state.art,
      outdoors_recreation: this.state.outdoors_recreation,
      science: this.state.science,
      animals: this.state.animals,
      music: this.state.music,
      holiday: this.state.holiday,
      fundraisers: this.state.fundraisers,
      festivals_parades: this.state.festivals_parades,
      singles_social: this.state.singles_social

    }
    console.log(JSON.stringify(data) + "just defined data");
    addProfile.call(
      data, (err, res) => {
        if (err) {
          console.log("WHY!????!???!?!?!?!?");
          console.log(err);
        }
        console.log(res);
      }
    );
  }

  handleToggle(){

  }

  
  render() {
    console.log(this.state)
    return (
      <ResponsiveContainer>

        <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>

                </Header>

                <div className="ui segment success">
                  <form className="ui form" >
                  <h4 className="ui dividing header">Personal Information</h4>

                  <div className="field">
                    <label>Name</label>
                    <div className="two fields">
                      <div className="field">
                      <input placeholder="First Name" className="firstName" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                      </div>
                      <div className="field">
                      <input placeholder="Last Name" className="lastName" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="field">
                        <label>Bio</label>
                        <textarea rows="2" type="text" className="bio" name="bio" placeholder="Type here" value={this.state.bio} onChange={this.handleChange}></textarea>
                  </div>

                <div className="ui button" tabIndex="0" onClick={this.handleSubmit} onClick={this.handleToggle}>Submit</div>
</form>

 </div>

              </Grid.Column>

              <Grid.Column floated='right' width={6}>
                <Image bordered circular size='medium' src='./images/Categories/Icons/avatar.png' />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Segment>


        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={14}>
                <div className="ui four stackable link cards">

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('art')}></i>
                      <div className="header">Art</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/art.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('outdoors_recreation')}></i>
                      <div className="header">Outdoors_recreation</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/outdoors_recreation.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('food')}></i>
                      <div className="header">Food</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/food.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('books')}></i>
                      <div className="header">Books</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/books.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('sports')}></i>
                      <div className="header">Sports</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/sports.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('science')}></i>
                      <div className="header">Science</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/science.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('music')}></i>
                      <div className="header">Music</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/music.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('animals')}></i>
                      <div className="header">Animals</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/animals.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('festivals_parades')}></i>
                      <div className="header">Festivals_parades</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/festival_parades.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('singles_social')}></i>
                      <div className="header">Singles_social</div>
                    </div>

                    <div className="image">
                      <img src="./images/Categories/nightlife_singles.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('fundraisers')}></i>
                      <div className="header">Fundraisers</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/fundraisers.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('holiday')}></i>
                      <div className="header">Holiday</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/holiday.jpg" />
                    </div>
                  </div>

                </div>

              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    )
  }
}

export default ProfilePageLayout
