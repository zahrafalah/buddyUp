import {Meteor} from 'meteor/meteor';
import {Events} from './events.js';
import {Collection2} from 'meteor/aldeed:collection2'
import {check} from 'meteor/check';
import {SimpleSchema} from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
//methods check that there is a user context before making any changes to the database. This is one of Meteor's ways of doing security. They keys for validated method are: name, validate, run. 
export const addEvent = new ValidatedMethod({
	name: 'events.addEvent',
	validate(eventfulID, postalCode, title, url, date, address, category) {
			check(eventfulID, postalCode, title, url, date, address, category, {
				eventfulID: String,
				postalCode: SimpleSchema.Integer,
				title: String,
				url: String,
				date: Date,
				address: String
			});
		},
	applyOptions: {
			returnStubValue: true,
		},
	run(eventfulID, postalCode, title, url, date, address, category){
    // Make sure the user is logged in before inserting a profile
    	if (!this.userId) {
      throw new Meteor.Error('not-authorized');
	}
		const user = Profiles.findOne(this.userId);
//in future add if ! user
		Profiles.insert({
			eventfulID: eventfulID,
			postalCode: postalCode,
			title: title,
			url: url,
			date: date,
			address: address,
			category: category}, (error, result) => {
				if (error){
					throw new Meteor.Error('insert-event-failed');
				}
				else {
				// success
					console.log("inserted" + result);
				}
		});
	}
});

 

