const express = require('express');
const router = express.Router();
const { List, Create, Search, Update, Delete } = require('../controllers/guest-book')

router.get('/', List)
router.post('/add', Create)
router.get('/search', Search) // /search?q=""
router.put('/update/:id', Update)
router.delete('/delete/:id', Delete)




module.exports = router;