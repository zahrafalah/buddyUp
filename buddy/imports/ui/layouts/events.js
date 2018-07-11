// top level layout: will include things like navbar, button placement, areas of text
import PropTypes from "prop-types";
import React, { Component } from "react";
import Menu from "../components/Menu";
import VerticalMenu from "../components/VerticalMenu";

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
          <div class="card">
            <div class="image">
              <img src="/images/avatar2/large/matthew.png" />
            </div>
            <div class="content">
              <div class="event">#</div>
              <div class="meta">
                <a>Category</a>
              </div>
            </div>
            <div class="description">SSSSSSSSSSSSSSSSSSSSSSSSSss</div>
          </div>
          <div class="extra content">
            <span class="right floated">date</span>
            <span>
              <i class="user icon" />
              # bodies going to
            </span>
          </div>
        </div>
      </Container>
    </Segment>;
  }
}

export default event;
