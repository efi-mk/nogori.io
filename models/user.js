var mongoose = require('mongoose');
var validator = require('validator');

var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    fullName: {type: String, required: true},
    password: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: '{VALUE} is not a valid email!'
        }
    },
    user_id: {type: String, required: true, unique: true}
});

schema.plugin(mongooseUniqueValidator);


module.exports = mongoose.model('User', schema);