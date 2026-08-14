import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string()
    .trim()
    .toLowerCase()
    .email('Invalid email format'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters long'),
  fullName: z.string()
    .trim()
    .min(2, 'Full name must be at least 2 characters'),
});

export const loginSchema = z.object({
  email: z.string()
    .trim()
    .toLowerCase()
    .email('Invalid email format'),
  password: z.string()
    .min(1, 'Password is required'),
});