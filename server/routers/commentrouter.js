const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentcontroller');


router.post('/addcomment', commentController.addComment);
router.get('/getall/:id', commentController.getAllComments);


module.exports = router;