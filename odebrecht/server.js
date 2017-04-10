var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(
    express.static(__dirname + '/')
);

// app.get('/data', function(req, res) {
//     res.sendFile(__dirname + '/data.jason');
// })

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(1451, function() {
    console.log('listening on *:1451');
});
