import { string } from 'zod';
import prisma from '../config/prisma';

export class WalletService {
    static async deposit(userId: string, amount: number) {
        const wallet = await prisma.wallet.findUnique({
            where: {userId}
        });

        if(!wallet) {
            throw new Error('No_Wallet')
        }

        // Adding the Amount
        const currentBalance = parseFloat(wallet.balance.toString());

        // Updating the Amount
        const newBalance = currentBalance + amount;

        // For ATOMICITY
        const result = await prisma.$transaction(async (tx) => {
      
        // Updated Wallet
        const updatedWallet = await tx.wallet.update({
            where: { id: wallet.id },
            data: {
                balance: newBalance, 
            }
        });

      // Reciept
      const transactionRecord = await tx.transaction.create({
        data: {
          type: 'DEPOSIT',
          status: 'COMPLETED',
          amount: amount,
          receiverId: wallet.id,                  // Money is going INTO this wallet
          receiverBalanceAfter: newBalance,       
          description: 'User initiated deposit'
        }
      });

      return { updatedWallet, transactionRecord };
    });


    return result.updatedWallet;
  }

  // For Reciept
  static async getTransactionHistory(userId: string) {
    const wallet = await prisma.wallet.findUnique({
      where: { userId }
    });

    if (!wallet) {
      throw new Error('No_Wallet');
    }
    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { senderId: wallet.id },
          { receiverId: wallet.id }
        ]
      },
      orderBy: {
        createdAt: 'desc' // Descending Order
      }
    });

    return transactions;
  }

  // For WithDrawl
  static async withdraw(userId: string, amount: number) {
    const wallet = await prisma.wallet.findUnique({
      where: { userId }
    });

    if (!wallet) {
      throw new Error('No_Wallet');
    }

    const currentBalance = parseFloat(wallet.balance.toString());

    // If Demand is higher than supply
    if (currentBalance < amount) {
      throw new Error('INSUFFICIENT_FUNDS');
    }

    const newBalance = currentBalance - amount;

    // THE ATOMIC TRANSACTION
    const result = await prisma.$transaction(async (tx) => {
      
      // Deduct from the wallet
      const updatedWallet = await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: newBalance }
      });

      // Audit Trail receipt
      const transactionRecord = await tx.transaction.create({
        data: {
          type: 'WITHDRAWAL',
          status: 'COMPLETED',
          amount: amount,
          senderId: wallet.id,                    // Money is leaving this wallet
          senderBalanceAfter: newBalance,         // Snapshot of the reduced balance
          description: 'User initiated withdrawal'
        }
      });

      return { updatedWallet, transactionRecord };
    });

    return result.updatedWallet;
  }
}

