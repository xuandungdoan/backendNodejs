const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('user', UserSchema);

class User extends UserModel {
    static signUp(email, name, password) {
        const user = new UserModel({ email, name, password });
        return user.save();
    }

    static async signIn(email, password) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Email do not exist.');
        if (password !== user.password) throw new Error('Password is invalid.');
        return true;
    }
}

module.exports = User;
