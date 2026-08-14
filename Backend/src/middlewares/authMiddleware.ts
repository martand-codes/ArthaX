import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  user?: {
    userId: string;
  };
}

export const protectRoute = (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ 
        success: false, 
        error: 'Unauthorized access: No token provided' 
      });
      return;
    }

    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };

    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT Verification Error:', error);
    res.status(401).json({ 
      success: false, 
      error: 'Unauthorized access: Invalid or expired token' 
    });
  }
};