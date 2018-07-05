
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'

import { Random1 } from "./pages/welcomepage";



const styles = {
  fontFamily: "sans-serif",
	textAlign: "center",

};

export default class App extends Component {
	
	render() {
	  return (
		<Button> Click Here </Button>,

		<div style={styles}>				
			<Random1 />   
    </div>

	  );
	}
  }
