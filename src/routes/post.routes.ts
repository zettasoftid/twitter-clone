const express = require('express');
const router = express.Router();
const { getAllPosts, newPostingan } = require('../controllers/post.controller')

router.get('/post', getAllPosts)
router.post('/post', newPostingan)

module.exports = router