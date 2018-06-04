const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        // these fields are from ldap
        uid: { type: String, lowercase: true },
        cn: { type: String, lowercase: true },
        givenName: { type: String},
        sn: { type: String},
        displayName: {type: String},
        mail: { type: String, lowercase: true}
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports.User = User;