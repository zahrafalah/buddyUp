/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';

import {Profiles} from './profiles.js';
describe('Profiles', () => {
	describe('insert', () => {
		it('can insert a validated schema', () => {
			Profiles.insert({firstName: "Ulysses", lastName: "Joyce"}, (error, result) => {
				//The insert will fail, error will be set,
				//and result will be undefined or false because "copies" is required.
				//
				if(error)
					Profiles.simpleSchema().namedContext().validationErrors();
				else {
					console.log(result);
					console.log(Profiles.find());
				}
				//The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().validationErrors()
			  });
		});
	});
});

// import faker from 'faker';
// import chai from 'chai';
// import { Factory } from 'meteor/dburles:factory';

// Factory.define('profile', Profile, {
//   firstName: 'John',
//   lastName: 'Smith',
//   bio: () => faker.lorem.sentence()
  
// });

// describe('adding a profile', function () {
// 	it('adds a user profile to the db', function () {
// 	  // This code will be executed by the test driver when the app is started
// 	  // in the correct mode
// 	  beforeEach(function () {
// 		resetDatabase();
// 	  });
// 	  try {
// 	  const profile_run = Factory.create('profile');
// 	  profile_run;
// 	  }
// 	  catch {
// 		  throw error;
// 	  }
// 	})
//   })
// if(Meteor.isServer){
// describe('my module', function () {
//   it('does something that should be tested', function () {
//     // This code will be executed by the test driver when the app is started
//       // in the correct mode
//       console.log("hello world");
//   })
// })
// }
/* eslint-env mocha */


