import { Router } from 'express';
import { getWalletBalance } from '../controllers/walletController';
import { protectRoute } from '../middlewares/authMiddleware';

const router = Router();
router.get('/balance', protectRoute, getWalletBalance);

export default router;