const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });

const User = require('./User');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.post('/user', parser, async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: 'OK' });
});
