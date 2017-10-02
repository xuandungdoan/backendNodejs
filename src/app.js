const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });

const User = require('./User');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/signin', (req, res) => res.render('signIn'));
app.get('/signup', (req, res) => res.render('signUp'));

app.post('/signin', parser, (req, res) => {

});

app.post('/signup', parser, (req, res) => {
    
});

app.post('/user', parser, async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'OK' });
});
module.exports = app;
