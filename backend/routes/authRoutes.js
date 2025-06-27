import express from 'express';
import {  adminLogin, googleLogin, login, logout, registration } from '../controller/authController.js';


const authRouter = express.Router();

authRouter.post('/registration', registration);
authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.post('/googlogin',googleLogin)
authRouter.post("/adminlogin",adminLogin)


export default authRouter;