var router=require('express').Router();
var controller=require('../controllers/userControllers');
//var staticControllers=require('../controllers/staticControllers')
//var authController=require('../controllers/auth');
router.post('/signUp',controller.signUp);
router.post('/login',controller.login);
 router.post('/otpVerify',controller.otpVerify);
 router.post('/resendOtp',controller.resendOtp);
 router.post('/forgotPassword',controller.forgotPassword);

module.exports=router;