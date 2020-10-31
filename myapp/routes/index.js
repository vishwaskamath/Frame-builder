var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET home page. */
router.get('/', function (req, res, next) {
  var sql1 = 'SELECT * FROM frame_type';

  var sql2 = 'SELECT * FROM mat_type WHERE category ="whitecore"';


  var sql3 = 'SELECT * FROM frame_type WHERE category = "white"';
  var sql4 = 'SELECT * FROM frame_type WHERE category = "gold"';
  var sql5 = 'SELECT * FROM frame_type WHERE category = "onsale"';
  var sql6 = 'SELECT * FROM frame_type WHERE category = "popular"';















  var sql8 = 'SELECT * FROM frame_type WHERE category = "float"';
  var sql9 = 'SELECT * FROM frame_type WHERE category = "aluminium"';
  var sql10 = 'SELECT * FROM frame_type WHERE category = "colorful"';
  var sql11 = 'SELECT * FROM frame_type WHERE category = "stain"';
  var sql12 = 'SELECT * FROM frame_type WHERE category = "silver"';
  var sql13 = 'SELECT * FROM frame_type WHERE category = "rawtimber"';
  var sql14 = 'SELECT * FROM frame_type WHERE category = "black"';
  var sql15 = 'SELECT * FROM frame_type WHERE category = "inner"';

  var sql7 = 'SELECT * FROM mat_type WHERE category ="blackcore"';

  db.query(sql1, function (err, data, fields) {
    db.query(sql2, function (err, result2) {
      db.query(sql3, function (err, result3) {
        db.query(sql4, function (err, result4) {
          db.query(sql5, function (err, result5) {
            db.query(sql6, function (err, result6) {
              db.query(sql7, function (err, result7) {
                db.query(sql8, function (err, result8) {
                  db.query(sql9, function (err, result9) {
                    db.query(sql10, function (err, result10) {
                      db.query(sql11, function (err, result11) {
                        db.query(sql12, function (err, result12) {
                          db.query(sql13, function (err, result13) {
                            db.query(sql14, function (err, result14) {
                              db.query(sql14, function (err, result15) {
                                if (err) throw err;
                                res.render('index', {
                                  title: 'Frame', framedata: data, matwdata: result2, whiteframe: result3, goldframe: result4, onsaleframe: result5, popularframe: result6, matbdata: result7,
                                  floatframe: result8, alumframe: result9, colorframe: result10, stainframe: result11, silverframe: result12, rawframe: result13, blackframe: result14, innerframe: result15,
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    })
  });


});

module.exports = router;
