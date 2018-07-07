import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Collection2 } from 'meteor/aldeed:collection2'
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';

export const Users = new Mongo.Collection('users');

const Schemas = {};

Schemas.User = new SimpleSchema({
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

Users.attachSchema(Schemas.User);