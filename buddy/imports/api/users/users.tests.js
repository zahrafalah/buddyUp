/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'meteor/aldeed:collection2'
import { Users } from './users.js';
import { AssertionError } from 'assert';
describe('Users', () => {
	describe('invalid insert', () => {
		it('denies invalid inserts into a validated schema', () => {
			console.log("Setup to run build");
			ret = Users.simpleSchema().namedContext().validate({title: "Ulysses", author: "James Joyce"}, {modifier: false});
			if(ret == true)
				throw new Error("Failed invalid schema accepted as valid.");
		});
	});
	describe('valid insert', () => {
		it ('validates correct inputs into a schema', () => {
			ret = Profiles.simpleSchema().namedContext().validate({firstName: "Joe", lastName: "Schmoe"}, {modifier: false});
			if(ret === false)
				throw new Error("Failed: valid schema denied as invalid.");
		})
	})
});