import { gte, string } from 'zod';
import prisma from '../config/prisma';

export class WalletService {
    static async deposit(userId: string, amount: number) {
        const wallet = await prisma.wallet.findUnique({
            where: {userId}
        });

        if(!wallet) {
            throw new Error('No_Wallet')
        }

        /*

        // Adding the Amount
        const currentBalance = parseFloat(wallet.balance.toString());

        // Updating the Amount
        const newBalance = currentBalance + amount;

        */
       // Here JavaScrpit was doing the logic so it's vulnurable we will use Atomicity
       // Handling CONCURRENCY
       
        // For ATOMICITY
        const result = await prisma.$transaction(async (tx) => {
      
        // Updating using prisma using locked queue
        const updatedWallet = await tx.wallet.update({
            where: { id: wallet.id },
            data: {
                balance: { increment: amount } 
            }
        });

      // Reciept
      const transactionRecord = await tx.transaction.create({
        data: {
          type: 'DEPOSIT',
          status: 'COMPLETED',
          amount: amount,
          receiverId: wallet.id,                  // Money is going INTO this wallet
          receiverBalanceAfter: updatedWallet.balance,       
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

    /* 
    
    Same here logic is handeled by js Using Prisma

    const currentBalance = parseFloat(wallet.balance.toString());

    // If Demand is higher than supply
    if (currentBalance < amount) {
      throw new Error('INSUFFICIENT_FUNDS');
    }

    const newBalance = currentBalance - amount;

    */

    // THE ATOMIC TRANSACTION
    const result = await prisma.$transaction(async (tx) => {
      try {
         // Deduct from the wallet
        const updatedWallet = await tx.wallet.update({
          where: {
           id: wallet.id, 
            balance: { gte: amount}
            },
            data: {
              balance: { decrement: amount}
            }
        });

        // Audit Trail receipt
      const transactionRecord = await tx.transaction.create({
        data: {
          type: 'WITHDRAWAL',
          status: 'COMPLETED',
          amount: amount,
          senderId: wallet.id,                    // Money is leaving this wallet
          senderBalanceAfter: updatedWallet.balance,         // Snapshot of the reduced balance
          description: 'User initiated withdrawal'
        }
      });

      return { updatedWallet, transactionRecord };


      } catch(error: any) {
        if(error.code === 'P2025') { // It resembles another transaction has stolen the money
          throw new Error('INSUFFICIENT_FUNDS');
        }
        throw error;
      }
    });

    return result.updatedWallet;
  }
}

