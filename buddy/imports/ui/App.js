
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
// import EventPage from '';
import { Random1 } from "./pages/welcomepage";
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const styles = {

	fontFamily: "sans-serif",
	textAlign: "center",

};

export default class App extends Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/profile" component={ProfilePage} />
				</div>
			</Router>
		);
	}
}

