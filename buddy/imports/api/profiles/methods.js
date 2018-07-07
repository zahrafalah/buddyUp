import {Profiles} from './profiles.js';

Meteor.methods ({

	'profiles.update'({ info, newText }) {
	  
  
	  const user = Profiles.findOne(userId);
  
	  if (!this.userId) {
		throw new Meteor.Error('profiles.update.notAuthorized',
		  'Cannot edit a profile that is not yours');
	  }
  
	  Todos.update(todoId, {
		$set: { text: newText }
	  });
	}
 
});
