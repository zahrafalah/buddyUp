import Events from '../events/events.js';
import Profiles from '../profiles/profiles.js';


Events.addLinks({
    'profiles': {
        type: 'many',
        collection: Profiles,
		field: 'profileIds',
		index: true
    }
});

Profiles.addLinks({
    'events': {
        collection: Events,
		inversedBy: 'profiles', 
		index: true
    }
});
