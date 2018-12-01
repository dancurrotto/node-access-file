var http = require('http');
var fs = require('fs');
let date = require('date-and-time');

let now = new Date();

console.log('running on port 8080...');
http.createServer(function (req, res) {
  fs.readFile('secret', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write(' ' + date.format(now, 'MM/DD/YYYY HH:mm:ss'));
    res.end();
  });
}).listen(8080);