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
    outdoors_recreation: {
        type: Boolean, 
        optional: false,
        defaultValue: false
    }, 
    food: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    books: {
        type: Boolean,
        optional: false,
        defaultValue: false
    }, 
    sports: {
        type: Boolean,
        optional: false,
        defaultValue: false
    }, 
    science: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    music: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    animals: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    festivals_parades: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    singles_social: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    fundraisers: {
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


