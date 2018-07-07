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
import { Router, Route, IndexRoute , browserHistory } from 'react-router';

// Import Pages and/or Components
import AppLayout from '../../ui/layouts/AppLayout.js';
import HomePage from '../../ui/pages/HomepageLayout.js';
import logIn from '../../ui/layouts/LoginLayout.js';

// Release the meeeettteeeoooor!
Meteor.startup( () => {
  
    render(
        <Router history={browserHistory}>
          <Route path="/hello-world" component={ AppLayout } > 
    
            {/* Home Page */}
            <IndexRoute component={ HomePage }  onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } />

            {/* Signup & Login Routes */}       
            <Route path="users" onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } >
                    <Route path="login" component={ LogIn } />
                    {/* <Route path="signup" component={ SignUpPage } /> */}          
            </Route>

          </Route>
        </Router>,

      
document.getElementById( 'render-target' )
);
});