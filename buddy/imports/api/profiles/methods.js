import {Profiles} from './profiles.js';
import {Collection2} from 'meteor/aldeed:collection2'
Meteor.methods ({
	'profiles.insert'(firstName, lastName, bio) {
		check(firstName, String);
		check(lastName, String);
		check(bio, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
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
  },
  'profiles.remove'(_id) {
    
 
    Profiles.remove(_id);
  },
	'profiles.update'({ newText }) {
		check(newText, String);
  
	  const user = Profiles.findOne(this.userId);
  
	  if (!this.userId) {
		throw new Meteor.Error('profiles.update.notAuthorized',
		  'Cannot edit a profile that is not yours');
	  }
  
	  Profiles.update(user, {
		$set: { bio: newText }
	  });
	}
	
 
});
