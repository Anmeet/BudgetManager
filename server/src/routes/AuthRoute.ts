import express from 'express';
import RequestValidator from '../middlewares/RequestValidator';
import { SignUpRequest } from '../requests/SignUpRequest';
import { SignInRequest } from '../requests/SignInRequest';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.post('/signup', RequestValidator.validate(SignUpRequest), AuthController.signUp);
router.post('/signin', RequestValidator.validate(SignInRequest), AuthController.signIn);
router.get('/test', AuthController.test);

export default router;
