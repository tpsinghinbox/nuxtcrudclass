const config = require('../helpers/config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
//const articlesController = require('../controllers/articlesController')

// Get All
router.get('/users', (req, res) => {
    res.json("userdetails");
})


module.exports = router