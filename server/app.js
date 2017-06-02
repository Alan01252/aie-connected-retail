'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function (socket) {
    console.log("Got connection from socket")
    setInterval(function () {
        console.log("Sending fake notification")
        socket.emit('notification', {message: 'Hello World'});
    }, 5000);
});


var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    server.listen(port);

    console.log('Listening on port' + port);

    if (swaggerExpress.runner.swagger.paths['/products']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/products');
    }
});
