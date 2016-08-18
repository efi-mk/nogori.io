/**
 * Created by efi on 16/08/16.
 */

var expect = require("chai").expect;
var User = require("../models/user");
describe("User model required values", function () {
    var tests = [
        {name: "fullName"},
        {name: "password"},
        {name: "email"},
        {name: "user_id"},
    ];

    tests.forEach(function (test) {
        it("should be invalid if " +  test.name + " is empty", function (done) {
            var user = new User();
            user.validate(function (err) {
                expect(err.errors[test.name]).to.exist;
                done();
            })
        });
    });

    it("email field accepts only valid values", function (done) {
        var user = new User({email: 'test@@mail.com'});

        user.validate(function (err) {
            expect(err.errors.email).to.exist;
            done();
        })
    });

    it("email is invalid", function(){
        var user = new User();
        user.email = "test123@@email.com"
        user.validate(function(err){
            assert.equal(err, null)
        })
    })
});