/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'meteor/aldeed:collection2'
import {Profiles} from './profiles.js';
import { AssertionError } from 'assert';
describe('Profiles', () => {
	describe('invalid insert', () => {
		it('denies invalid inserts into a validated schema', () => {
			console.log("Setup to run build");
			ret = Profiles.simpleSchema().namedContext().validate({userId: "10", title: "Ulysses", author: "James Joyce"}, {modifier: false});
			if(ret == true)
				throw new Error("Failed invalid schema accepted as valid");
		});
	});
	describe('valid insert', () => {
		it ('validates correct inputs into a schema', () => {
			ret = Profiles.simpleSchema().namedContext().validate({firstName: "Joe", lastName: "Schmoe", art: false, coffee: true, food: true, reading: false, sport: false, science: true, concert: false, pet: true, festival: true, happyhour: false, volunteer: true, holiday: false}, {modifier: false});
			if(ret === false)
				throw new Error("Failed: valid schema denied as invalid");
		})
	})
});




