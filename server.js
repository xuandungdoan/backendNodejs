const express = require('express');
const cookieParser = require('cookie-parser');
const { sign, verify } = require('./jwt');

const app = express();
app.use(cookieParser());

app.get('/save', (req, res) => {
    res.cookie('token', 'abcdef').send('Saved');
});

app.get('/show', (req, res) => {
    res.send('Token: ' + req.cookies.token);
});

app.get('/muave', (req, res) => {
    sign({ daMuaVe: true })
    .then(token => res.cookie('token', token).send('Ban da mua ve'));
});

app.get('/vaorap', (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send('Ban phai mua ve');
    verify(token)
    .then((obj) => {
        delete obj.exp;
        return sign(obj);
    })
    .then(newToken => res.cookie('token', newToken).send('Moi xem phim'))
    .catch(() => res.send('Ban phai mua ve'));
});

// app.use('/a', (req, res, next) => {
//     console.log('aaa');
//     next();
// });

// app.get('/a/b', (req, res) => {
//     res.send('Xong');
// });

// app.get('/a', (req, res) => {
//     res.send('Xong');
// });

// app.get('/a/b/c', (req, res) => {
//     res.send('Xong');
// });

// const loggerMidleware = (req, res, next) => {
//     req.body = { name: 'Pho' };
//     next();
// };

// const replyMiddleware = (req, res, next) => {
//     res.send('Hello');
// };

// app.get('/', loggerMidleware, (req, res) => {
//     res.send(req.body.name);
// });

// app.get('/a', replyMiddleware, (req, res) => {
//     res.send('Xong');
// });

app.listen(3000, () => console.log('Server started!'));
