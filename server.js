const   express = require("express"),
        cors    = require("cors"),
        bodyParser = require("body-parser"),
        path    = require("path"),
        compressor = require("compression"),
        enforce = require('express-sslify'),
        methodOverride = require("method-override"),
        mongoose  = require("mongoose"),
        passport  = require("passport-local"),
        localStrategy = require("passport-local"),
        User    = require("./models/user");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.set('useUnifiesTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.connect();

app.use(bodyParser.json());
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(require("express-session")({
  secret: "Maynooth Furniture Authentication",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.autheticate()));
passport.serializeUser(User.serializeUser());
passport.deserilizeUser(User.deserilizeUser());

app.use(methodOverride("_method"));

app.listen(port, process.env.IP ,error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});