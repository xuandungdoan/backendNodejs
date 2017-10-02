const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });

const User = require('./User');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/signin', (req, res) => res.render('signIn'));
app.get('/signup', (req, res) => res.render('signUp'));

app.get('/private', (req, res) => {
    //use express-session
});

app.post('/signin', parser, (req, res) => {

});

app.post('/signup', parser, (req, res) => {
    
});

module.exports = app;
