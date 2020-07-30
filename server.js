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
        Product = require("./models/product"),
        Cart    = require("./models/cart");

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

app.get('/', function(req, res) {
  Product.find({},function(err,products){
    if(err){
        res.status(500).send({error: err});
    } else {
        res.status(200).send(products);
    }
  });
});

app.post('/api/register', function(req, res) {
  let newUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo
    });
    User.register(newUser, req.body.password, function(err,user){
      if(err){
        console.log(err);
        return res.status(500).send({error: err});
      }else{
        passport.authenticate('local')(req, res, function () {
          return res.status(200).send({username: req.body.username,name: req.body.name, email: req.body.email, phoneNo: req.body.phoneNo});
        });
      }
    });
});

app.post('/api/login', passport.authenticate("local"),function(req,res){
  res.status(200).send(req.user);
});

app.get("/api/logout",function(req,res){
  req.logout();
  res.sendStatus(200);
});

app.get("/api/session", function(req,res){
  if(req.isAuthenticated()){
    return res.status(200).send(req.user);
  }else {
    return res.status(200).send();
  }
});

app.get("/api/getcartiems", function(req, res){
  Cart.find({userId: req.body.user.id}, function(err, cartItems){
    if(err){
      return res.status(200).send();
    } else {
      return res.status(200).send(cartItems);
    }
  })
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
