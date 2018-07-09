import { Meteor } from 'meteor/meteor';
import { AssertionError, doesNotReject } from 'assert';
import'chai';
import { Random } from 'meteor/random'
import './methods.js';
describe('Profile methods', () =>{
	describe('Profile insert method', ()=> {
		let userId = null;
    let userFct = null;

    const isDefined = function (target) {
        chai.assert.isNotNull(target, "unexpected null value");
        chai.assert.isDefined(target, "unexpected undefined value");

        if (typeof target === 'string')
            assert.notEqual(target.trim(), "");
    };

    //------------------------------------------//

    beforeEach(() => {

        // save the original user fct
        userFct = Meteor.user;

        // Generate a real user, otherwise it is hard to test roles
        userId = Accounts.createUser({username: Random.id(5)});
        isDefined(userId);

        // mock the Meteor.user() function, so that it
        // always returns our new created user
        Meteor.user = function () {
            const users = Meteor.users.find({_id: userId}).fetch();
            if (!users || users.length > 1)
                throw new Error("Meteor.user() mock cannot find user by userId.");
            return users[0];
        };
    });

    //------------------------------------------//

    afterEach(() => {
        //remove the user in the db
        Meteor.users.remove(userId);
        // restore user Meteor.user() function
        Meteor.user = userFct;
        // reset userId
        userId = null;
    });

		it('inserts given data', () => {
			try {
				Meteor.call('profiles.addProfile',
					'Briana', 'Johnson', 'A busy person'), (err, res)=>{console.log(res)};
				}
			
			catch(err){
				throw new Error(err);
			}
			  });
		});
	});

