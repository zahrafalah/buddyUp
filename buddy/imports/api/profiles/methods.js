import {Profiles} from './profiles.js';

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
    });
  },
  'profiles.remove'(_id) {
    
 
    Tasks.remove(_id);
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
