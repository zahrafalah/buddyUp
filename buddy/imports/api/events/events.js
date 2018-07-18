import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
// import SimpleSchema from 'meteor/aldeed:collection2'
export const Events = new Mongo.Collection('events');

const Schemas = {};

Schemas.Event = new SimpleSchema({
  
	//extend to make optional if other apis get added
    eventfulID: {
        type: String,
        optional: false
	}, 
	
	postalCode: {
		type: SimpleSchema.Integer,
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
	}, 
	address: {
		type: String,
		optional: true
	},
	category: {
		type: String,
		optional: false
	}

  
});

Events.attachSchema(Schemas.Event);
