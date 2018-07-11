// top level layout: will include things like navbar, button placement, areas of text 
import PropTypes from 'prop-types'
import React, { Component } from 'react'
<<<<<<< HEAD
import Menu from '../components/Menu'
import VerticalMenu from '../components/VerticalMenu';
=======
//import Container from '../components/Container'

>>>>>>> 8ea45be9b3c64f1dfd6c22fc3b2eedbc094b510c

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
  Visibility,
} from 'semantic-ui-react'

class event extends React.Component {

  render(){
    return
    <Segment>
      <Container>
        <Menu/>
      </Container>
      <Container>
        <div class="four wide column">
          <VerticalMenu/>
        </div>
        <div class="12 wide column">
        
        </div>

      </Container>


    </Segment>
  };

};

export default event;
