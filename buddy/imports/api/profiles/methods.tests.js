import { Meteor } from 'meteor/meteor';
// import SimpleSchema from 'meteor/aldeed:collection2'
// import {Profiles} from './profiles.js';
import { AssertionError } from 'assert';
// import {addProfile} from './methods.js';
import './methods.js';
describe('Profile methods', () =>{
	describe('Profile insert method', ()=> {
		it('inserts given data', () => {
			try {
			Meteor.call('profiles.addProfile',
				'Briana', 'Johnson', 'A busy person')
				}
			catch(err){
				throw new Error(err);
			}
			  });
		});
	});



//   describe('Profiles', () => {
// 	describe('invalid insert', () => {
// 		it('denies invalid inserts into a validated schema', () => {
// 			console.log("Setup to run build");
// 			ret = Profiles.simpleSchema().namedContext().validate({title: "Ulysses", author: "James Joyce"}, {modifier: false});
// 			if(ret == true)
// 				throw new Error("Failed invalid schema accepted as valid");
// 		});
// 	});
