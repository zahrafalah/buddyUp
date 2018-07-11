
import {Meteor} from 'meteor/meteor';
import {Events} from './events.js';
import {check} from 'meteor/check';
import {SimpleSchema} from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
//methods check that there is a user context before making any changes to the database. This is one of Meteor's ways of doing security. They keys for validated method are: name, validate, run. 
export const addEvent = new ValidatedMethod({
	//starting to suspect this should be an upsert: we want to insert once and then update buddies after
	name: 'events.addEvent',
validate(event) {
	console.log("Event: "  + JSON.stringify(event));
		check(event, {
			eventfulID: Match.OneOf(String, undefined),
			postalCode: Match.Optional(Match.OneOf(SimpleSchema.Integer, undefined)),
			title: Match.Optional(Match.OneOf(String, undefined)),
			url: Match.Optional(Match.OneOf(Boolean, undefined)),
			date: Match.Optional(Match.OneOf(Date, undefined)),
			address: Match.Optional(Match.OneOf(String, undefined)),
			category: Match.Optional(Match.OneOf(String, undefined)),
		});
	},
applyOptions: {
		returnStubValue: true,
	},
run(event){
	console.log("I am here with input " + JSON.stringify(event));
	// Make sure the user is logged in before inserting a profile
if (!this.userId) {
	console.log("NOT AUTHORIZED!!! :(");
  throw new Meteor.Error('not-authorized');
}


Events.update({eventfulID: event.eventfulID}, {$set: event},{upsert: true}, (error, result) => {
	if (error){
		console.log("Failed to insert" + error);
		throw new Meteor.Error('insert-failed');
	}
	else {
		// success
		console.log("Success??");
		console.log("inserted" + result);
	}
})
	}
});

Meteor.methods({
  'geoJsonForIp': function (ip) {
    // avoid blocking other method calls from the same client
    this.unblock();
    var apiUrl = 'http://api.eventful.com/json/events/search?...x&app_key=Pn3g5RvNgRnxzTxp' + ip;
    // asynchronous call to the dedicated API calling function
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }
});

