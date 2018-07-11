import {Meteor} from 'meteor/meteor';
import {Profiles} from './profiles.js';
import {Collection2} from 'meteor/aldeed:collection2'
import {check} from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const addProfile = new ValidatedMethod({
	name: 'profiles.addProfile',
	validate(firstName, lastName, bio) {
			check(firstName, LastName, bio, {
				firstName: String,
				lastName: String,
				bio: String
			});
		},
	applyOptions: {
			returnStubValue: true,
		},
	run(firstName, lastName, bio){
    // Make sure the user is logged in before inserting a profile
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Profiles.insert({
			firstName: firstName,
			lastName: lastName,
			bio: bio
    }, (error, result) => {
			if (error){
				throw new Meteor.Error('insert-failed');
			}
			else {
				// success
				console.log("inserted" + result);
			}
		})
	}
	});
	
export const removeProfile = new ValidatedMethod({
	name: 'profiles.removeProfile',
	validate(_id){
		check(_id,{
			_id: String
		});
	},
	applyOptions: {
		returnStubValue: true
	},
	run(_id){
		if (!this.userId) {
      throw new Meteor.Error('not-authorized');
		}
		Profiles.remove(_id);
	}
 });
 // export const insert = new ValidatedMethod({
//   name: 'lists.insert',
//   validate: new SimpleSchema({
//     language: {
//       type: String,
//     },
//   }).validator(),
//   run({ language }) {
//     return Lists.insert({}, null, language);
//   },
// });
export const updateProfile = new ValidatedMethod({
	name: 'profiles.updateProfile',
	validate(newBio){
		check(newBio,{
			newBio: String
		});
	},
	applyOptions: {
			returnStubValue: true
		},
  run(newBio){
	  const user = Profiles.findOne(this.userId);
  
	  if (!this.userId) {
		throw new Meteor.Error('profiles.update.notAuthorized',
		  'Cannot edit a profile that is not yours');
	  }
  
	  Profiles.update(user, {
		$set: { bio: newBio }
	  });
	}
})
 

