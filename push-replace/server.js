// Use the web-push library to hide the implementation details of the communication
// between the application server and the push service.
// For details, see https://tools.ietf.org/html/draft-ietf-webpush-protocol-01 and
// https://tools.ietf.org/html/draft-thomson-webpush-encryption-01.
var webPush = require('web-push');

webPush.setGCMAPIKey(process.env.GCM_API_KEY);

module.exports = function(app, route) {
  app.post(route + 'register', function() {
    // A real world application would store the subscription info.
  });

  app.post(route + 'sendNotification', function(req) {
    webPush.sendNotification(req.query.endpoint, 200);

    setTimeout(function() {
      webPush.sendNotification(req.query.endpoint, 200);
    }, req.query.delay * 1000);
  });
};
