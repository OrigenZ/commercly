const router = require('express').Router()

/* GET home page */
router.get('/', (req, res, next) => {



  res.render('index')
  // res.render('index', { totalItemsCart: req.session.totalItems })

})

module.exports = router
