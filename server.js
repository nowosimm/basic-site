const express = require("express")
const path = require('path')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
  })

app.listen(8080)
