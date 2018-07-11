
Meteor.methods({
  'geoJsonForIp': function (ip) {
    // avoid blocking other method calls from the same client
    this.unblock();
    var apiUrl = 'http://api.eventful.com/json/events/search?...x&app_key=Pn3g5RvNgRnxzTxp' + ip;
    // asynchronous call to the dedicated API calling function
    var response = Meteor.wrapAsync(apiCall)(apiUrl);
    return response;
  }
});