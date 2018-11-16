const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const methodOverride= require("method-override");
const authRoutes = require('./routes/auth-routes');
const tokenRoutes = require('./routes/token-routes');
const editRoutes= require('./routes/editRoutes');
const indexRoutes = require('./routes/indexRoutes');
const profileRoutes = require('./routes/profile-routes');
const commentRoutes = require('./routes/commentRoutes');
const searchRoutes = require('./routes/searchRoutes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: true}));

// set view engine
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));


// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));



// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});


// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use(commentRoutes);
app.use(editRoutes);
app.use(indexRoutes);
app.use(searchRoutes);
app.use(tokenRoutes);


// create home route
app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
