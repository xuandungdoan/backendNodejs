const express = require('express');
const session = require('express-session');
const parser = require('body-parser').urlencoded({ extended: false });

const User = require('./User');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
    secret: 'alsdh93e9d927d',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
}));

app.get('/signin', (req, res) => res.render('signIn'));
app.get('/signup', (req, res) => res.render('signUp'));

app.get('/private', (req, res) => {
    //use express-session
    if (!req.session.daDangNhap) return res.redirect('/signin');
    console.log(req.session.user);
    res.render('private');
});

app.post('/signin', parser, (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(user => {
        req.session.daDangNhap = true;
        req.session.user = user;
        res.send('Sign in thanh cong!');
    })
    .catch(err => res.send(err.message));
});

app.post('/signup', parser, (req, res) => {
    const { email, password, name } = req.body;
    User.signUp(email, name, password)
    .then(() => res.send('Dang ky thanh cong!'))
    .catch(err => res.send(err.message));
});

module.exports = app;
