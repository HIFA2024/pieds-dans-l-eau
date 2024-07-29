const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogcontroller');


router.post('/addblog',blogController.addBlog);
router.get('/getall', blogController.getAllBlogs);
router.get('/getall/:userId', blogController.getBlogsByUserId);
router.delete('/delete/:id',blogController.deleteBlog)
router.put('/update/:idblog',blogController.updateBlog)
router.get('/get/:place',blogController.getBlogByplace)



module.exports = router;