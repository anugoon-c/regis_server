const passport      = require('passport'),
      passportJWT   = require("passport-jwt"),
      ExtractJWT    = passportJWT.ExtractJwt,
      JWTStrategy   = passportJWT.Strategy,
      LocalStrategy = require('passport-local').Strategy

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'ACDCBattlionRegisteration'
    },
    (jwtPayload, cb) => {
      try {
        // find the user in db if needed
        // if(jwtPayload.sub == user.sub) {
        //   return cb(null, user);
        // } else {
          console.log(jwtPayload);
          return cb(null, jwtPayload);
        // }
      } catch (error) {
        console.log(error);
        return cb(error, false);
      }
    }
));