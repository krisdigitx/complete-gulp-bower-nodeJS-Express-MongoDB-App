var passport = require('passport');

module.export = function(app) { 
    app.use(passport.initialize());
    app.use(passport.session());

};