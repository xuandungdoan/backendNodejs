const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect('mongodb://localhost/shop', { useMongoClient: true });
mongoose.connection.once('open', () => {
    app.listen(3000, () => console.log('Server started!'));
});
