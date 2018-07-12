import PropTypes from 'prop-types'
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
import '../../api/profiles/profiles';

/* eslint-disable react/no-multi-comp */
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
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
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
      // art:false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    // this.setState({value: event.target.value});
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
                  Name
                </Header>

                <div className="ui segment success">
                  <div className="ui form">
                    <div className="two fields">
                      <div className="field ">
                        <label>First Name</label>
                        <input placeholder="First Name" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                      </div>
                      <div className="field">
                        <label>Last Name</label>
                        <input placeholder="Last Name" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="ui submit button">Submit</div>
                  </div>
                </div>

                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible.
                  Let us delight your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Bio
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
                </p>
              </Grid.Column>

              <Grid.Column floated='right' width={6}>
                <Image bordered circular size='medium' src='./images/Categories/coffee.jpg' />
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
                      <img src="./images/Categories/Arts.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('coffee')}></i>
                      <div className="header">Coffee</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/coffee.jpg" />
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
                      <i className="right floated like icon" onClick={(event) => this.handleClick('reading')}></i>
                      <div className="header">Reading</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/reading.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('sport')}></i>
                      <div className="header">Sport</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/Sports.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('science')}></i>
                      <div className="header">Science</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/Science.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('concert')}></i>
                      <div className="header">Concert</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/concerts.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('pet')}></i>
                      <div className="header">Pet</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/Pets.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('festival')}></i>
                      <div className="header">Festival</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/festivals.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('happyhour')}></i>
                      <div className="header">Happy-hour</div>
                    </div>

                    <div className="image">
                      <img src="./images/Categories/happy-hour.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('volunteer')}></i>
                      <div className="header">Volunteer</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/volunteer.jpg" />
                    </div>
                  </div>

                  <div className="card">
                    <div className="content">
                      <i className="right floated like icon" onClick={(event) => this.handleClick('holiday')}></i>
                      <div className="header">Holiday</div>
                    </div>
                    <div className="image">
                      <img src="./images/Categories/holidays.jpg" />
                    </div>
                  </div>

                </div>


                {/* <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible.
                  Let us delight your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
                </p> */}
              </Grid.Column>
              {/* <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
              </Grid.Column> */}
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment> */}

        {/* <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the
              art of doing nothing by providing massive amounts of whitespace and generic content that
              can seem massive, monolithic and worth your attention.
            </p>
            <Button as='a' size='large'>
              Read More
            </Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
              it's really true. It took years of gene splicing and combinatory DNA research, but our
              bananas can really dance.
            </p>
            <Button as='a' size='large'>
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment> */}

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
