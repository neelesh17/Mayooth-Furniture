const   express = require("express"),
        cors    = require("cors"),
        bodyParser = require("body-parser"),
        path    = require("path"),
        compressor = require("compression"),
        methodOverride = require("method-override"),
        mongoose  = require("mongoose"),
        passport  = require("passport"),
        LocalStrategy = require("passport-local").Strategy,
        User    = require("./models/user"),
        Cart    = require("./models/cart"),
        Product = require("./models/product").model;
        
const loginRegisterRoutes = require('./routes/login-register'),
      cartitemRoutes      = require('./routes/cartitems'),
      productRoutes       = require('./routes/product');

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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(methodOverride("_method"));

//Requring routes
app.use("/",productRoutes);
app.use("/",loginRegisterRoutes);
app.use("/",cartitemRoutes);

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
