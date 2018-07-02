<<<<<<< HEAD
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import client-side routing and configs
import '/imports/startup/client';
=======

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
>>>>>>> dda7e0746200cb3a88b403d37c1370b1f2384c0d
import './main.html';

import App from '../imports/ui/App.js';


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
