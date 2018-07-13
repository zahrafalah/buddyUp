import { Meteor } from 'meteor/meteor';
import { AssertionError, doesNotReject } from 'assert';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import{assert} from 'chai';
import { Random } from 'meteor/random'
import {addProfile} from './methods.js';

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
