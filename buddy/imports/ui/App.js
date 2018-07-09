
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Button } from 'semantic-ui-react';

import HomePage from './pages/HomePage';

import { Random1 } from "./pages/welcomepage";

import { withTracker } from 'meteor/react-meteor-data'; 
import { Tasks } from '../api/tasks.js';
import  Task  from './tasks.js';

const styles = {
  fontFamily: "sans-serif",
	textAlign: "center",

};

class App extends Component {

	getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
	}
	
	renderTasks() {
    return this.props.tasks.map(task => {
			console.log("Tasks", Tasks);
			// console.log("hi",task);
			return (

      <Task key={task._id} task={task} />
		);
	})
  }
	
	render() {
	  return (
<div>
		<HomePage  />

		<ul>
		{this.renderTasks()}
	  </ul>
</div>
	  );
	}
	}

	export default withTracker(() => {
		return {
			tasks: Tasks.find({}).fetch(),
		};
	})(App);

