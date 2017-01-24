// let http = require('http');
// let port = 3000;
//
// app.set('views', './views');
// app.set('view engine', 'pug');
//
// let server = http.createServer((request, response) => {
//     response.end("Hello NodeJS !");
// });
//
// server.listen(port, (err) => {
//     if (err)
//         return console.log('something bad happened', err);
//     console.log(`server is listening on ${port}`);
// });
//
//
// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!'});
// });


var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('views'));
// app.set('views', './views')


app.get('/', function (req, res) {
    res.render(
        'index',
        { title: 'Hey Hey Hey!', message: 'Bienvenue sur ce magnifique site de la quête Server HTTP NodeJS', message2: 'Il est temps de faire du pug mon petit pote...' });
});

app.get('/about', function (req, res) {
  res.render(
    'about',
    { message3: 'Bienvenue sur ABOUT', message4: 'Oui mais about what ?' });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
