const mongoose = require('mongoose');
const User = require('../src/User');

before('Start database', (done) => {
    mongoose.connect('mongodb://localhost/shop', { useMongoClient: true });
    mongoose.connection.once('open', () => done());
});

beforeEach('Clear database', async () => {
    await mongoose.connection.db.dropDatabase();
    // await User.remove({});
    await User.ensureIndexes({});
});
