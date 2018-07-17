//top-level page, will call layout inside of here and I'm thinking logic will happen here?

import React from "react";
import { Button } from 'semantic-ui-react';
import { Wave, Random } from "react-animated-text";
import { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.js';
import { withRouter } from 'react-router-dom';
import Modal from '../components/Modal';

const exampleStyle = {
  display: "inline-block",
  color: "white",
  textAlign: "center",
  backgroundColor: "black",
  margin: "0 auto",
  paddingTop: "2.7em",
  width: "100%",
  position: "fixed",
  height: "100%",
  top: "0px",
  left: "0px",
  fontSize: "8rem",
  fontFamily: "'Chela One', cursive"
};

const skipStyle = {
  fontSize: "2.5rem",
  position: "fixed",
  bottom: "1em",
  right: "1em",   
}

const policyStyle = {
  position: "fixed",
  bottom:"1em",
  left: "1em",
  fontSize: "2.5rem", 
}

class WelcomePage extends React.Component {
  
    constructor(props) {
      super(props)
  
      this.skip = this.skip.bind(this)
      this.state = { isOpen: false };
    }
    skip() {
      this.props.history.push('/')
    }
  
    toggleModal = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }


  render() {
   
    return (
      
      <div style={exampleStyle}>
        <Random
          text="Any Buddy Up?!"
          effect="jump"
          effectChange={2.0}
          effectDuration={0.3}
        />

        <div style={{marginTop:'0.5em'}}>
          <Button inverted >
            <AccountsUIWrapper />
          </Button>
        </div>

        <div style={skipStyle} onClick={this.skip} >
          Skip
        </div>

        <div style={policyStyle}  onClick={this.toggleModal}>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
        </Modal>
        </div>

        

      </div>


    )
  }
}

export default  withRouter(WelcomePage)