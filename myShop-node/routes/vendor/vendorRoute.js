import express from 'express';
const router = express.Router();
import checkTokenAuthorization from '../../middleware/auth.js';
import VendorController from '../../controller/vendor/vendor.controller.js';

//PUBLIC ROUTES
router.post('/register', VendorController.vendorRegistration);
router.post('/login', VendorController.vendorLogin);
router.post('/forgotpassword', VendorController.vendorForgotPassword);
router.post('/reset-password/:id/:token', VendorController.resetVendorPassword);


//PROTECTED ROUTES
router.post('/changepassword', checkTokenAuthorization, VendorController.changeVendorPassword);


export default router;