var express = require('express');
var router = express.Router();

/* GET update page. */
router.get('/update', function(req, res, next) {
  res.render('update', { title: '博文更新', name: '博文更新' });
});

module.exports = router;
