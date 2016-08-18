var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');


var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        fullName: req.body.fullName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email,
        // Generate a random user_id on first save
        user_id: uuid.v4()
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, doc) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            });
        }
        if (!passwordHash.verify(req.body.password, doc.password)) {
            return res.status(404).json({
                title: 'No user found',
                error: {message: 'User could not be found'}
            });
        }
        var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: doc._id
        });
    })
});

module.exports = router;