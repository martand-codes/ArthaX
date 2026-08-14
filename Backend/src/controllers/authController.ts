import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // req.body is already perfectly validated and formatted by Zod!
    const { user, token } = await AuthService.register(req.body);

    res.status(201).json({
      success: true,
      message: 'User successfully registered',
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        wallet: user.wallet,
        portfolio: user.portfolio
      }
    });
  } catch (error: any) {
    if (error.message === 'DUPLICATE_EMAIL') {
      res.status(409).json({ success: false, error: 'A user with this email already exists' });
      return;
    }
    console.error('Registration Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user, token } = await AuthService.login(req.body);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        wallet: user.wallet,
        portfolio: user.portfolio
      }
    });
  } catch (error: any) {
    if (error.message === 'INVALID_CREDENTIALS') {
      res.status(401).json({ success: false, error: 'Invalid email or password' });
      return;
    }
    console.error('Login Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};