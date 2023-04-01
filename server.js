var http = require('http');
var fs = require('fs');
let express = require('express');
let path = require('path');
let app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get('/profile-picture', function (req, res) {
    let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
  });
  


// function onRequest(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     fs.readFile('./index.html', null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write('File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// }

// http.createServer(onRequest).listen(8000);
app.listen(3000, function () {
    console.log("app listening on port 3000!");
  });
  