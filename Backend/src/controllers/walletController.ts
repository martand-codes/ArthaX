import { Response } from 'express';
import prisma from '../config/prisma';
import { AuthRequest } from '../middlewares/authMiddleware'; 
import {WalletService} from '../services/walletService';

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

export const depositFunds = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const {amount} = req.body;

    if(!userId) {
      res.status(401).json ({
        success: false,
        error: 'Unauthorized User! Restricting Access'
      });
      return;
    }
    const updatedWallet = await WalletService.deposit(userId, amount);

    res.status(200).json({
      success: true,
      message: "Money Deposited Successfully!",
      wallet: {
        id: updatedWallet.id,
        balance: updatedWallet.balance,
        currency: updatedWallet.currency,
      }
    });
  } catch(error: any) {
    if(error.message == "No_Wallet") {
      res.status(404).json({
        succes: false,
        error: "Wallet Not Found in Our Records" 
      });
      return;
    }
    console.error('Deposit Error: ', error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
}

export const getTransactionHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401).json({ success: false, error: 'Unauthorized' });
      return;
    }
    const transactions = await WalletService.getTransactionHistory(userId);

    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions: transactions
    });
  } catch (error: any) {
    if (error.message === 'No_Wallet') {
      res.status(404).json({ success: false, error: 'Wallet not found' });
      return;
    }
    console.error('Transaction Fetch Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};