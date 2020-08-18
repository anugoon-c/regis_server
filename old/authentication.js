// var jwt = require('express-jwt');

// const authenticate = (req, res, next) => {
//     // check header or url parameters or post parameters for token
//     var token = req.body.token || req.params.token || req.headers['authorization'];
//     console.log(token);
//     // decode token
//     if (token) {
//         // verifies secret and checks exp
//         // jwt.verify(token, app.get('superSecret'), function(err, decoded) {          
//         //     if (err) {
//         //         return res.json({ success: false, message: 'Failed to authenticate token.' });      
//         //     } else {
//         //         // if everything is good, save to request for use in other routes
//         //         req.decoded = decoded;  
//         //         next();
//         //     }
//         // });
//         next();
//     } else {
//         // if there is no token
//         // return an error
//         return res.status(403).send({ 
//             success: false, 
//             message: 'No token provided.'
//         });
//     }
// };

// module.exports = authenticate