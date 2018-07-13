import {Meteor} from 'meteor/meteor';
import {Profiles} from './profiles.js';
import {Collection2} from 'meteor/aldeed:collection2'
import {check} from 'meteor/check';
import {SimpleSchema} from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
//methods check that there is a user context before making any changes to the database. This is one of Meteor's ways of doing security. They keys for validated method are: name, validate, run. 
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
	run(firstName, lastName, bio, art, outdoors_recreation, food, books, sports, science, music, animals, festivals_parades, singles_social, fundraisers, holiday){
    // Make sure the user is logged in before inserting a profile
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
	}
	const user = Profiles.findOne(this.userId);
	if(user === null){

		Profiles.simpleSchema().insert({
			userId: this.userId,
			firstName: firstName,
			lastName: lastName,
			bio: bio,
			art: art,
			outdoors_recreation: outdoors_recreation,
			food: food,
			books: books,
			sports: sports,
			science: science,
			music: music,
			animals: animals,
			festivals_parades: festivals_parades,
			singles_social: singles_social,
			fundraisers: fundraisers,
			holiday: holiday
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
	else {
		throw new Meteor.Error('insert-not-allowed');
	}
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
export const updateBio = new ValidatedMethod({
	name: 'profiles.updateBio',
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

export const updateCategory = new ValidatedMethod({
	name: 'profiles.updateCategory',
	validate(category){
		check(category,{
			category: Object
		});
	},
	applyOptions: {
			returnStubValue: true
		},
  run(category){
	  const user = Profiles.findOne(this.userId);
  
	  if (!this.userId) {
		throw new Meteor.Error('profiles.update.notAuthorized',
		  'Cannot edit a profile that is not yours');
	  }
  
	  Profiles.update(user, {
		$set: { category }
	  });
	}
})
 

