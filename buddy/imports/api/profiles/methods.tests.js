import { Meteor } from 'meteor/meteor';
import { AssertionError, doesNotReject } from 'assert';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import{assert} from 'chai';
import { Random } from 'meteor/random'
import {addProfile} from './methods.js';
// import './methods.js';
//this file attempts to test methods by passing in a user context in a beforeEach hook, then deleting the created user in an afterEach hook after running the test. Validated-method package was added because it allows a user context to be passed in using the _execute method. something is going really wrong here, though. 
//Use TEST_WATCH=1 meteor test --driver-package meteortesting:mocha
//to run tests and see the outcomes. 
describe('Profile methods', function(){
	describe('Profile insert method', ()=> {
		let userId = null;
    let userFct = null;

    const isDefined = function (target) {
        assert.isNotNull(target, "unexpected null value");
        assert.isDefined(target, "unexpected undefined value");

        if (typeof target === 'string')
            assert.notEqual(target.trim(), "");
    };

    //------------------------------------------//

    beforeEach(function(){

        // save the original user fct
        userFct = Meteor.user;

        // Generate a real user, otherwise it is hard to test roles
        userId = Accounts.createUser({username: Random.id(5)});
		isDefined(userId);
		
		console.log(userId, "userId generated");
        // mock the Meteor.user() function, so that it
        // always returns our new created user
        // Meteor.user = function () {
        //     console.log("finding user id");
		// 	const users = 
		// 	console.log("creating user");
        //     if (!users || users.length > 1)
        //         throw new Error("Meteor.user() mock cannot find user by userId.");
        //     return users[0];
		// };
		
		console.log("context " + context);
	});
    //------------------------------------------//

     afterEach(function(){
		//remove the user in the db
		console.log("removing");
        Meteor.users.remove(userId);
        // restore user Meteor.user() function
        // Meteor.user = userFct;
        // reset userId
        userId = null;
    });

		it('inserts given data', function() {
			try {
				console.log("try block");
				console.log("userId" + userId);
				addProfile.run.call({userId: userId},
					{firstName:'Briana', lastName:'Johnson', bio:'A busy person', art: false, outdoors_recreation: true, food: true, books: false, sports: false, science: true, music: false, animals: true, festivals_parades: true, singles_social: false, fundraisers: true, holiday: false});
				
		}
			catch(err){
				throw new Error(err);
			}
		});
	});
})
