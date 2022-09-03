import express from 'express';
const router = express.Router();
import checkTokenAuthorization from '../../middleware/auth.js';
import AdminController from '../../controller/admin/admin.controller.js';

//PUBLIC ROUTES
router.post('/register', AdminController.adminRegistration);
router.post('/login', AdminController.adminLogin);
router.post('/forgotpassword',AdminController.adminForgotPassword);
router.post('/reset-password/:id/:token',AdminController.resetAdminPassword);


//PROTECTED ROUTES
router.post('/changepassword', checkTokenAuthorization, AdminController.changeAdminPassword);

export default router;