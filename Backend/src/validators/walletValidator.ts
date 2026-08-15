import {z} from 'zod';

export const depositSchema = z.object({
    amount: z.number()
    .positive('Deposit should always be positive')
    .max(10000000, 'Deposit should not be more than 1 Crore')
});

export const withdrawSchema = z.object({
  amount: z.number()
    .positive('Withdrawal amount must be greater than zero')
    .max(5000000, 'Maximum withdrawal limit exceeded for a single transaction'),
});

