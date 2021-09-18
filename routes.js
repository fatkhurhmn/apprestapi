'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/tampil')
    .get(jsonku.getdata_user);
}