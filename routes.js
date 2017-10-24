module.exports = function(app) {
    var dnscontroller = require('./controllers/dnscontroller');

    app.route('/lookup/:lookup/:type?')
      .get(dnscontroller.dns_lookup);
  };