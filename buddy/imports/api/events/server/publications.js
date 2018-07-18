import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Events} from '../profiles.js';

Meteor.publish('events', function eventsPublication() {
	const eventsLink = Events.getLink(profileIds, 'profiles');
	if (!this.userId) {
		throw new Meteor.Error('not-authorized');
}
	return eventsLink.find().fetch();
  });
//goal is to use cultofcoders:grapher to get linked documents and expose them
 
// return Rooms.find({ admin: this.userId }, {
// 	fields: { secretInfo: 1 }
// });
