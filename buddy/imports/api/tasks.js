import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
 
export const Tasks = new Mongo.Collection('tasks');



export const User = new Mongo.Collection('users');



Schemas.User = new SimpleSchema({
 
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

Users.attachSchema(Schemas.User);




