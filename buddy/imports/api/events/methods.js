const POLL_INTERVAL = 5000;

Meteor.publish('polled-publication', function() {
  const publishedKeys = {};

  const poll = () => {
   
    const data = HTTP.get(REST_URL, REST_OPTIONS);

    data.forEach((doc) => {
      if (publishedKeys[doc._id]) {
        this.changed(COLLECTION_NAME, doc._id, doc);
      } else {
        publishedKeys[doc._id] = true;
        this.added(COLLECTION_NAME, doc._id, doc);
      }
    });
  };

  poll();
  this.ready();

  const interval = Meteor.setInterval(poll, POLL_INTERVAL);

  this.onStop(() => {
    Meteor.clearInterval(interval);
  });
});