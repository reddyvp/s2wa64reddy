var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let a = Math.cos(x) 
  let b =Math.asin(x)
  let c = Math.asinh(x)
  res.render('computation', {
    title: 'Bonus',
    values: `applied to ` + x + ` is ` + a,
    v1: `applied to ` + x + ` is ` + b,
    v2: `applied to ` + x + ` is ` + c
  });
});

module.exports = router;