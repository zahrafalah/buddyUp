import { FlowRouter } from 'meteor/kadira:flow-router';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Replace with actual pages we want to load on the front-end
// import '../../ui/layouts/app-body.js';
// import '../../ui/pages/root-redirector.js';
// import '../../ui/pages/lists-show-page.js';
// import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
import '../../ui/accounts/accounts-templates.js';

// Below here are the route definitions
// Import React Essentials
import React from 'react';
import { render } from 'react-dom';
import { Route, IndexRoute } from 'react-router';

// Import Pages and/or Components
import AppLayout from '../../ui/layouts/AppLayout.js';
import HomePage from '../../ui/pages/HomepageLayout.js';
import ProfilePage from '../../ui/pages/ProfilePage.js';
import WelcomePage from '../../ui/pages/WelcomePage.js';
import EventPage from '../../ui/pages/ProfilePage.js';
import EventsPage from '../../ui/pages/EventsPage.js'


// Release the meeeettteeeoooor!
Meteor.startup( () => {
  
    render(
        
    <Router history={ browserHistory } >

        <Route path="/" component={ AppLayout } >

            {/* Home Page */}
            <IndexRoute component={ HomePage }  onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } />

            {/* Profile Page */}
            <Route path="/profile" component={ ProfilePage } onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />
             {/* Events Page */}
            <Route path="/events" component={ EventsPage } onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />
         </Route>

    </Router>,


      
document.getElementById( 'render-target' )
);
});