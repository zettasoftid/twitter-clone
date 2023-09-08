const express = require('express');
const router = express.Router();
const { getAllUser, newUsers } = require('../controllers/user.controller')

router.get('/user', getAllUser)
router.post('/user', newUsers)

module.exports = router