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
        optional: false
    },
    coffee: {
        type: Boolean, 
        optional: false
    }, 
    food: {
        type: Boolean,
        optional: false
    },
    reading: {
        type: Boolean,
        optional: false
    }, 
    sport: {
        type: Boolean,
        optional: false
    }, 
    science: {
        type: Boolean,
        optional: false
    },
    concert: {
        type: Boolean,
        optional: false
    },
    pet: {
        type: Boolean,
        optional: false
    },
    festival: {
        type: Boolean,
        optional: false
    },
    happyhour: {
        type: Boolean,
        optional: false
    },
    volunteer: {
        type: Boolean,
        optional: false
    },
    holiday: {
        type: Boolean,
        optional: false
    } 
});

Profiles.attachSchema(Schemas.Profile);


