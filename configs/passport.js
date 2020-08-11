const passport      = require('passport'),
      passportJWT   = require("passport-jwt"),
      ExtractJWT    = passportJWT.ExtractJwt,
      JWTStrategy   = passportJWT.Strategy,
      LocalStrategy = require('passport-local').Strategy

// Mock Data
const user = {
  id: 1,
  sub: 'nuttapong',
  email: 'nottdev@gmail.com'
}

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    (jwtPayload, cb) => {
      try {
        // find the user in db if needed
        // if(jwtPayload.sub == user.sub) {
        //   return cb(null, user);
        // } else {
          return cb(null, jwtPayload);
        // }
      } catch (error) {
        return cb(error, false);
      }
    }
));