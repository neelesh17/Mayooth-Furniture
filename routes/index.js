const express   = require("express"),
      router    = express.Router(),
      Product   = require('../models/product').model;  


router.get('/api/getproducts', function(req, res) {
  Product.find({},function(err,products){
    if(err){
        res.status(500).send({error: err});
    } else {
        res.status(200).send(products);
    }
  });
});
module.exports = router;