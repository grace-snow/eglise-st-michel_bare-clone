// on récupère les dépendances dans packqage json
const express = require('express');
const bodyParser = require ('body-parser');
const exphbs = require('express-handlebars');
//const path = require ('path');
const nodemailer = require('nodemailer');

const mail = express();

// vien engine setup
//app.engine('handlebars', exphbs());
//app.set('view engine', 'handlebars');

//static folder 
//app.use('/public', express.static(path.join(__dirname, 'public')));


// add bodyparser  - see doc 
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())


// it's the home road
mail.get('/', (req, res) => {

 res.render('Hello');

});

//app.post('/send', (req, res) => {
    //console.log('Hello');

//});

mail.listen(3000, () => console.log('server started...'));