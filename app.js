/*var http = require('http');
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
  
 res.write('hello');
}).listen(8080);*/

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);