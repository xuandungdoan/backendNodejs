const assert = require('assert');
const User = require('../src/User');

describe('Test sign in', () => {
    beforeEach('Create a user', async () => {
        await User.signUp('vanpho01@gmail.com', 'Pho', '123');
    });

    it('Can sign in with right infomation', async () => {
        const kq = await User.signIn('vanpho01@gmail.com', '123');
        assert(kq);
    });

    it('Cannot sign in with wrong email', async () => {
        const message = await User.signIn('vanpho01', '123')
        .catch(err => err.message);
        assert.equal(message, 'Email do not exist.');
    });

    it('Cannot sign in with wrong password', async () => {
        const message = await User.signIn('vanpho01@gmail.com', '1234')
        .catch(err => err.message);
        assert.equal(message, 'Password is invalid.');
    });
});

