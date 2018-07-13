
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import HomePage from './pages/HomePage';
// import EventPage from '';
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BuddiesAndEventsPage from'.pages/BuddiesAndEventsPage';

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
					<Route exact path="/buddies-events" component={EventsPage} />
				</div>
			</Router>
		);
	}
}

