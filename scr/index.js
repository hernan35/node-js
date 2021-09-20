const express = require('express');
const app = express();
const path = require('path');

const indexRoute = require('./routes/app');

// settings
app.set('port', 3000)  // puerto a utilizar 
app.set('views', path.join(__dirname, 'views')); // ruta
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // plantilla a utilizar

// middlewares


// routes
/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});*/

app.use(indexRoute); // direccionamiento con la plantilla index.ejs

// static files
app.use(express.static(path.join(__dirname, 'public')))


// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});