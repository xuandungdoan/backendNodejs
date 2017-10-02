const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'alsdh93e9d927d',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

app.get('/muave', (req, res) => {
    req.session.daMuaVe = true; // eslint-disable-line
    res.send('Ban da mua ve');
});

app.get('/vaorap', (req, res) => {
    if (req.session.daMuaVe) {
        req.session.count = req.session.count ? req.session.count + 1 : 1;
        return res.send('Moi xem phim');
    }
    return res.send('Ban phai mua ve');
});

app.listen(3000, () => console.log('Server started!'));
