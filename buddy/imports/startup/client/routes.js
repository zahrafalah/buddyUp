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
import EventPage from '../../ui/pages/ProfilePage.js';


// Release the meeeettteeeoooor!
Meteor.startup( () => {

    Store.subscribe(refresh);
    function refresh() {
      console.log("REFRESH");
      browserHistory.replace(location);
    }
  
    function redirectIfSignedIn(){
      if(Meteor.userId() != null){
        
        console.log("Redirecting Signed In User");
        browserHistory.replace('/dashboard');
      } else {
        console.log("User is NOT there");
      }
    }
  
    function redirectUnlessSignedIn(){
      if(Meteor.userId() === null){
        console.log("Redirecting Visitor");
        browserHistory.replace('/users/login');
      } else {
        console.log("User is there");
      }
    }
  
    render(
        
    <Router history={ browserHistory } >

        <Route path="/" component={ AppLayout } >

            {/* Home Page */}
            <IndexRoute component={ HomePage }  onChange={ redirectIfSignedIn } onEnter={ redirectIfSignedIn } />

            {/* Profile Page */}
            <Route path="/profile" component={ ProfilePage } onEnter={ redirectUnlessSignedIn } onChange={ redirectUnlessSignedIn } />

         </Route>

    </Router>,


      
document.getElementById( 'render-target' )
);
});