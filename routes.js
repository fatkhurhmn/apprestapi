'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.getdata_user);

    app.route('/tampil/:id')
    .get(jsonku.getdata_id);

    app.route('/add_user')
    .post(jsonku.addData_user);

    app.route('/put_user')
    .post(jsonku.putData_user);
}