'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    cors = require('cors'),
    api = require('./services/api-service'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.get('/api', api.findAll);
app.get('/api/:id', api.findById);

app.listen(app.get('port'), function () {
    console.log('Data Directory server listening on port ' + app.get('port'));
});