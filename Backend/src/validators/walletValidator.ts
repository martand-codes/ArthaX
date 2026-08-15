import {z} from 'zod';

export const amountSchema = z.object({
    amount: z.number()
    .positive('Deposit should always be positive')
    .max(10000000, 'Deposit should not be more than 1 Crore')
});