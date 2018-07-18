import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import{assert} from 'chai';
import { Random } from 'meteor/random'
import './publications';

describe('profiles', function() {
  it('should publish a user profile', function(done) {
	  beforeEach(function(){
		//use profile method to insert a profile to test
	  });
    const collector = new PublicationCollector({ userId: Random.id() });

    collector.collect('profiles', (collections) => {
		console.log(collections);
      assert.property(collections.Profile.isArray());
      done();
    });
  });
});

