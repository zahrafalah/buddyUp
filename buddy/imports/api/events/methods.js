import {Meteor} from 'meteor/meteor';


Meteor.methods({
    'geoJsonForIp': function (query) {
      // avoid blocking other method calls from the same client
      this.unblock();
      var apiUrl = 'http://api.eventful.com/json/events/search?...&app_key=Pn3g5RvNgRnxzTxp' + query;
      // asynchronous call to the dedicated API calling function
      var response = Meteor.wrapAsync(apiCall)(apiUrl);
      return response;
    }
  });