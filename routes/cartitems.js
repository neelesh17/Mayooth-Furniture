const express   = require("express"),
      router    = express.Router(),
      Cart      = require('../models/cart');

router.get("/api/cartiems", function(req, res){
    Cart.find({userId: req.userId}, function(err, cartItems){
      if(err){
        return res.status(200).send();
      } else {
        return res.status(200).send(cartItems);
      }
    })
  });
  
  router.post("/api/cartitems", async function(req, res){
    await Cart.findOneAndUpdate({userId: req.body.user.id},{items: req.body.cartItems}, {upsert: true}, function(err, newCart){
      if(err){
        if(!newCart){
          newCart= new Cart({items: req.body.cartItems,
            userId: req.body.user.id});
        }
        newCart.save(function(err){
          if(err){
            console.log(err);
            return res.status(500).send({error: err});
          }else{
            return res.status(200);
          }
        });
      }
      return res.status(200);
    });
  });

  module.exports = router;