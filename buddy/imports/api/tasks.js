import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
 
export const Tasks = new Mongo.Collection('tasks');



export const UserProfile = new Mongo.Collection('userProfile');

UserProfile.schema = new SimpleSchema({
 
  user_id: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: Number
  }

})



// import { Mongo } from 'meteor/mongo';
 
// import { Meteor } from 'meteor/meteor';
// import {Collection2} from 'meteor/aldeed:collection2'

// import { check } from 'meteor/check';

// export const Profiles = new Mongo.Collection('profiles');

// const Schemas = {};

// Schemas.Profile = new SimpleSchema({
// 	firstName: {
//         type: String,
//         optional: true
//     },
//     lastName: {
//         type: String,
//         optional: true
//     },
//     bio: {
//         type: String,
//         optional: true
// 	} 
// });

// Profiles.attachSchema(Schemas.Profile);





