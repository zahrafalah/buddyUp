import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {Collection2} from 'meteor/aldeed:collection2'
import SimpleSchema from 'simpl-schema';
// import SimpleSchema from 'meteor/aldeed:collection2'
export const Profiles = new Mongo.Collection('events');

const Schemas = {};

Schemas.Event = new SimpleSchema({
  
	//extend to make optional if other apis get added
    eventfulID: {
        type: String,
        optional: false
	}, 
	
	postalCode: {
		type: Integer,
		optional: true
	},
	title: {
		type: String,
		optional: true
	},
	url: {
		type: String,
		optional: true
	},
	date: {
		type: Date,
		optional: true
	}

  
});

Profiles.attachSchema(Schemas.Profile);
