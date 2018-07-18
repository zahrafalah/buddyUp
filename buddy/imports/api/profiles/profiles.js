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
        optional: true,
        defaultValue: ""
    },
    lastName: {
        type: String,
        optional: true,
        defaultValue: ""
    },
    bio: {
        type: String,
        optional: true,
        defaultValue: ""
    }, 
    art: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    outdoors_recreation: {
        type: Boolean, 
        optional: true,
        defaultValue: false
    }, 
    food: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    books: {
        type: Boolean,
        optional: true,
        defaultValue: false
    }, 
    sports: {
        type: Boolean,
        optional: true,
        defaultValue: false
    }, 
    science: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    music: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    animals: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    festivals_parades: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    singles_social: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    fundraisers: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    holiday: {
        type: Boolean,
        optional: true,
        defaultValue: false
    } 
});

Profiles.attachSchema(Schemas.Profile);


