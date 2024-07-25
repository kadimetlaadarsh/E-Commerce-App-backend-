import express from 'express';
import {testController, registerController,loginController } from '../controllers/authController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST route for registration
router.post('/register', registerController);

// Test route
/*router.get('/test', (req, res) => {
    res.send("Auth route is working!");
});*/

//LOGIN || POST
router.post('/login',loginController);

//test routes
router.get('/test', requireSignIn, testController);

export default router;

