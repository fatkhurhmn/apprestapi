'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);

    app.route('/get_mhs')
    .get(jsonku.get_mhs);

    app.route('/get_mhs/:id')
    .get(jsonku.get_mhs_id);

    app.route('/add_mhs')
    .post(jsonku.add_mhs);

    app.route('/put_mhs')
    .put(jsonku.put_mhs);

    app.route('/delete_mhs')
    .delete(jsonku.delete_mhs);
}