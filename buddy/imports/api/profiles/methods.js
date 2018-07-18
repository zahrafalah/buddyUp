import {Meteor} from 'meteor/meteor';
import {Profiles} from './profiles.js';
import {Collection2} from 'meteor/aldeed:collection2'
import {check} from 'meteor/check';
import {SimpleSchema} from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
//methods check that there is a user context before making any changes to the database. This is one of Meteor's ways of doing security. They keys for validated method are: name, validate, run. 
export const addProfile = new ValidatedMethod({
	name: 'profiles.addProfile',
	validate(profile) {
		console.log("Profile: "  + JSON.stringify(profile));
			check(profile, {
				firstName: Match.Optional(Match.OneOf(String, undefined)),
				lastName: Match.Optional(Match.OneOf(String, undefined)),
				bio: Match.Optional(Match.OneOf(String, undefined)),
				sports: Match.Optional(Match.OneOf(Boolean, undefined)),
				books: Match.Optional(Match.OneOf(Boolean, undefined)),
				food: Match.Optional(Match.OneOf(Boolean, undefined)),
				science: Match.Optional(Match.OneOf(Boolean, undefined)),
				music: Match.Optional(Match.OneOf(Boolean, undefined)),
				outdoors_recreation: Match.Optional(Match.OneOf(Boolean, undefined)),
				animals: Match.Optional(Match.OneOf(Boolean, undefined)),
				festivals_parades: Match.Optional(Match.OneOf(Boolean, undefined)),
				singles_social: Match.Optional(Match.OneOf(Boolean, undefined)),
				fundraisers: Match.Optional(Match.OneOf(Boolean, undefined)),
				holiday: Match.Optional(Match.OneOf(Boolean, undefined)),
				art: Match.Optional(Match.OneOf(Boolean, undefined)),
			});
		},
	applyOptions: {
			returnStubValue: true,
		},
	run(profile){
		console.log("I am here with input " + JSON.stringify(profile));
		// Make sure the user is logged in before inserting a profile
    if (!this.userId) {
		console.log("NOT AUTHORIZED!!! :(");
      throw new Meteor.Error('not-authorized');
	}

	profile["userId"] = this.userId;

	Profiles.insert(profile, (error, result) => {
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
 

