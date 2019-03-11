var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{'userName':'Dani','userPassword':"1234"},{'userName':'Yedidel','userPassword':"1234"}]);
});

module.exports = router;
