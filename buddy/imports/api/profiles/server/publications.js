import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Profiles} from '../profiles.js';

Meteor.publish('tasks', function profilesPublication() {
    return Profiles.find({
            userId: this.userId ,
        });
  });
