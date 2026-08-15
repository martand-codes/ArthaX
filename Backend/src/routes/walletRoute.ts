import { Router } from 'express';
import { depositFunds, getTransactionHistory, getWalletBalance } from '../controllers/walletController';
import { protectRoute } from '../middlewares/authMiddleware';
import { validate } from '../validators/validateRequest';
import { amountSchema } from '../validators/walletValidator'; 

const router = Router();

// For Checking the Balance
router.get('/balance', protectRoute, getWalletBalance);

// For Depositing Funds
router.post('/deposit', protectRoute, validate(amountSchema), depositFunds);

// For Fetching the Reciept
router.get('/transactions', protectRoute, getTransactionHistory);
export default router;