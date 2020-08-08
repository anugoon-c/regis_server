var express = require('express');
const jwt = require('jsonwebtoken')
const passport = require('passport')
var router = express.Router();
var db = require('../connection/db');

/* Insert person */
router.post('/login', ( req, res, next ) => {
  
    passport.authenticate('local', { session: false }, (err, user, info) => {
      
      if (err) return next(err)

      if(user) {
        const token = jwt.sign(user, 'your_jwt_secret')
        return res.json({user, token})
      } else {
        return res.status(422).json(info);
      }

    })(req, res, next)

})

/* Insert person */
router.post('/logout', function(req, res, next) {
    try {
        console.log('LOGOUT')
    } catch (err) {
        res.send('respond with a resource');
    }
});

module.exports = router;