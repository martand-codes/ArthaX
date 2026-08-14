import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { validate } from '../validators/validateRequest'; 
import { registerSchema, loginSchema } from '../validators/authValidator';
const router = Router();

// 3. Put the bouncer in the middle!
router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);

export default router;