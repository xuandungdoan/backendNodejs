const assert = require('assert');
const User = require('../src/User');

describe('Test sign up', () => {
    it('Can sign up with full infomation', async () => {
        await User.signUp('vanpho01@gmail.com', 'Pho', '123');
        const user = await User.findOne({});
        assert.equal(user.email, 'vanpho01@gmail.com');
    });

    it('Cannot sign in with email, that has already exist', async () => {
        await User.signUp('vanpho01@gmail.com', 'Pho', '123');
        try {
            await User.signUp('vanpho01@gmail.com', 'Pho', '123');
            throw new Error('wrong');
        } catch (err) {
            assert(err.message !== 'wrong');
        }
    });
});
