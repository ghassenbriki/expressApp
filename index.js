//.gitignore ignore l'ajout de node_modules au repositry , on peut ajouter tous les modules manquants ==> npm install


const express = require('express');
const morgan = require('morgan');

 http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));


app.use(express.static(__dirname + '/public')); //__dirname refers to the project root not the relative from my pc

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});