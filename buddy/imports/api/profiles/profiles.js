import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {Collection2} from 'meteor/aldeed:collection2'
import SimpleSchema from 'simpl-schema';
// import SimpleSchema from 'meteor/aldeed:collection2'

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


