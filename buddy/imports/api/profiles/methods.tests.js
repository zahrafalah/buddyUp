import { Meteor } from 'meteor/meteor';
import { AssertionError, doesNotReject } from 'assert';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import{assert} from 'chai';
import { Random } from 'meteor/random'
// import {addProfile} from './methods.js';
import './methods.js';
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
		const context = {userId}
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
			// try {
			// 	console.log("try block");
			// 	// Meteor.call('profiles.addProfile',
			// 	// 	'Briana', 'Johnson', 'A busy person'), (err, res)=>{console.log(res)};
			// 	// }
			// 	addProfile._execute(context, userId, 'Briana', 'Johnson');
			// catch(err){
			// 	throw new Error(err);
			// }
			//  done(); 
			const args = ['10', 'Briana'];
			assert.doesNotThrow(() => {
				Profiles.addProfile._execute(context, args);
			  }, Error);
			
		});
	});
})
