var express = require('express');
var router = express.Router();
var app = express();

let connection = require('../database.js');

router.post('/', function(req, res) {
  
    var frame     = req.body["cart"][0]["Product Summary"];
    var glass     = req.body["cart"][1]["Product Summary"];
    var backing     = req.body["cart"][2]["Product Summary"];
    var hanger     = req.body["cart"][3]["Product Summary"];
    var printing     = req.body["cart"][4]["Product Summary"];
    var imageSize     = req.body["cart"][5]["Product Summary"];
    var glassSize     = req.body["cart"][6]["Product Summary"];
    var outsideSize     = req.body["cart"][7]["Product Summary"];
    var quantity     = req.body["cart"][8]["Product Summary"];
    var totalCost     = req.body["cart"][9]["Product Summary"];
    var matSelected     = req.body["cart"][10]["Product Summary"];
    var imagePath     = req.body["otherData"][0]["image"];
console.log(imagePath);
    // insert statment
let sql = `INSERT INTO frame_orders(IMAGE,FRAME, GLASS, BACKING, HANGER, PRINTING, IMAGE_SIZE, GLASS_SIZE,OUTSIDE_SIZE,TOTAL_QUANTITY,TOTAL_PRICE,MAT_SELECTED) VALUES ('${imagePath}','${frame}','${glass}','${backing}','${hanger}','${printing}','${imageSize}','${glassSize}','${outsideSize}','${quantity}','${totalCost}','${matSelected}')`;

connection.query(sql,function (err, data) {
      if (err) throw err;
           console.log("record inserted");
       });

  }); 

// execute the insert statment


module.exports = router;
