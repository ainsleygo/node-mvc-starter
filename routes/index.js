const router = require('express').Router();

// Home route
router.get('/', function(req, res) {
    res.render('home', { title: 'Home' });
});

module.exports = router;