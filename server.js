var express = require('express');
var app = express();
var path = require('path');


// viewed at http://localhost:8080
function setHeaders(res) {
  res.setHeader('X-device', 'web');
};
console.log(process.env.REACT_APP_HOST_IP_ADDRESS)
console.log(process.env.REACT_APP_HOST_ENV_URL)
app.set('trust proxy', 'loopback');
app.use('/static/js', express.static(__dirname + '/build/static/js', {
  setHeaders: setHeaders
}));

app.use('/static/css', express.static(__dirname + '/build/static/css', {
  setHeaders: setHeaders
}));

// app.use('/dist', express.static(__dirname + '/static/dist', {
//   setHeaders: setHeaders
// }));


// app.use('/static/img', express.static(__dirname + '/static/static/img'));
// app.use('/static/fonts', express.static(__dirname + '/static/static/fonts'));
// app.use('/static/svg', express.static(__dirname + '/static/static/svg'));

app.get('/', function(req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, '/build/')
  });
});

// any other routes:
app.all("/*", function(req, res, next) {
  res.sendFile("index.html", {
    root: __dirname + '/build/'
  });
});

app.listen(3030);