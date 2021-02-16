const path = require('path');

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const userController = require('../app_controllers/users_controller.js');
// const User = require('../app_model/users_model')


router.get('/', userController.getData);

router.post('/userData', upload.single('image'), userController.create);

router.get('/List', userController.findAll);

router.get('/List/:userId', userController.findOne);

router.put('/List/:userId', userController.update);

router.delete('/List/:userId', userController.delete);

module.exports = router;
