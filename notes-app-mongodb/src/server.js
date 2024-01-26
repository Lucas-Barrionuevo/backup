const express = require ('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const mongoose= require ('mongoose');
//Initializations
const app = express();

//Settings  
app.set ( 'port' , process.env.PORT || 4000);
app.set('views' , path.join(__dirname + 'views'));
// app.engine('.hbs', exphbs({
//     defaultLayout : 'main',
//     layoutsDir : path.join(app.get('views'), 'layouts'),
//     partialsDir : path.join(app.get('views'), 'partials'),
//     extname : '.hbs'
// }));
//  app.set('view engine' , '.hbs');
//Middlewares
app.use(express.urlencoded({extended:false}));
//Global Variables

//Static Files
app.use(express.static(__dirname + '/public'));
//Routes
app.use(require('./controllers/controller'));
    // res.sendFile(__dirname + '/views/main.html');
    // res.render('index');
module.exports = app;

