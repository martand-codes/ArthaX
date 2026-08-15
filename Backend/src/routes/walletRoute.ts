import { Router } from 'express';
import { depositFunds, getTransactionHistory, getWalletBalance, withdrawFunds } from '../controllers/walletController';
import { protectRoute } from '../middlewares/authMiddleware';
import { validate } from '../validators/validateRequest';
import { depositSchema, withdrawSchema } from '../validators/walletValidator'; 

const router = Router();

// For Checking the Balance
router.get('/balance', protectRoute, getWalletBalance);

// For Depositing Funds
router.post('/deposit', protectRoute, validate(depositSchema), depositFunds);

// For Withdrawl
router.post('/withdraw', protectRoute, validate(withdrawSchema), withdrawFunds);

// For Fetching the Reciept
router.get('/transactions', protectRoute, getTransactionHistory);
export default router;