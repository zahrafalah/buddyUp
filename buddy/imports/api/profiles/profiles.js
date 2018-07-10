import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {Collection2} from 'meteor/aldeed:collection2'
import SimpleSchema from 'simpl-schema';
// import SimpleSchema from 'meteor/aldeed:collection2'
//adds a simpleSchema which will later be adjusted to add categories, etc. The idea for now is to get a simple version of the backend working before packing in other stuff. 
export const Profiles = new Mongo.Collection('profiles');

const Schemas = {};

Schemas.Profile = new SimpleSchema({
    userId: {
        type: String,
        optional: false
    },
	firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    bio: {
        type: String,
        optional: true
	} 
});

Profiles.attachSchema(Schemas.Profile);


