const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');


router.post('/adduser', userController.addUser);
router.post('/login', userController.login);
router.put('/update/:iduser',userController.updateUser)
router.delete('/delete/:iduser',userController.deleteUser)


module.exports = router;