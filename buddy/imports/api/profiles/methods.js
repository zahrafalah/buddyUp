import {Profiles} from './profiles.js';

Meteor.methods ({

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
