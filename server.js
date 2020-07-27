const   express = require("express"),
        cors    = require("cors"),
        bodyParser = require("body-parser"),
        path    = require("path"),
        compressor = require("compression"),
        enforce = require('express-sslify'),
        methodOverride = require("method-override"),
        mongoose  = require("mongoose"),
        passport  = require("passport"),
        localStrategy = require("passport-local"),
        User    = require("./models/user");
        Product = require("./models/product");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  
}
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/maynooth');

mongoose.set('useUnifiedTopology', true );
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

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

// passport.use(new localStrategy(User.autheticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));

app.get('/', function(req, res) {
  Product.find({},function(err,products){
    if(err){
        res.status(500).send({error: err});
    } else {
        res.status(200).send(products);
    }
  });
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
