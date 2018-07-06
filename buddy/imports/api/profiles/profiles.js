import { Mongo } from 'meteor/mongo';
 
import { Meteor } from 'meteor/meteor';
import {Collection2} from 'meteor/aldeed:collection2'
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';

export const Profiles = new Mongo.Collection('profiles');

const Schemas = {};

Schemas.Profile = new SimpleSchema({
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


