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
    }, 
    art: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    coffee: {
        type: Boolean, 
        optional: false,
        defaultValue: false
    }, 
    food: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    reading: {
        type: Boolean,
        optional: false,
        defaultValue: false
    }, 
    sport: {
        type: Boolean,
        optional: false,
        defaultValue: false
    }, 
    science: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    concert: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    pet: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    festival: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    happyhour: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    volunteer: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    holiday: {
        type: Boolean,
        optional: false,
        defaultValue: false
    } 
});

Profiles.attachSchema(Schemas.Profile);


