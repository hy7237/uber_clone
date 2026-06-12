const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userModel = require('../models/user.model');
const userController = require('../controllers/user.controller');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstName').isLength({min:3}).withMessage('First Name must be at least of 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be at 6 characters long')
],
userController.registerUser
)





module.exports = router;
