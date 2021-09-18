const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//parse application/json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});