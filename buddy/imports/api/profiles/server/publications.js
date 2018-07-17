import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Profiles} from '../profiles.js';

Meteor.publish('profiles', function profilesPublication() {
    return Profiles.find({
            userId: this.userId ,
        });
  });
//goal is to use cultofcoders:grapher to get linked documents and expose them
  Meteor.publish('buddies', function eventBuddiesPublication(){
      const buddyLink = Profiles.getLink(profileId, 'profiles'); 
      buddyLink.find().fetch();
  })
