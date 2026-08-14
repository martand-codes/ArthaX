import { Response } from 'express';
import prisma from '../config/prisma';
// Adjust the import path below to wherever you saved your protectRoute middleware
import { AuthRequest } from '../middlewares/authMiddleware'; 

export const getWalletBalance = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401).json({ success: false, error: 'Unauthorized' });
      return;
    }
    const wallet = await prisma.wallet.findUnique({
      where: { userId }
    });

    if (!wallet) {
      res.status(404).json({ success: false, error: 'Wallet not found' });
      return;
    }

    res.status(200).json({
      success: true,
      wallet: {
        id: wallet.id,
        balance: wallet.balance,
        currency: wallet.currency
      }
    });
  } catch (error) {
    console.error('Wallet Fetch Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};