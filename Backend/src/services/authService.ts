import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma';
import { Prisma } from '@prisma/client';

export class AuthService {
  static async register(data: any) {
    const { email, password, fullName } = data;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          fullName,
          password: hashedPassword,
          wallet: {
            create: {} 
          },
          portfolio: {
            create: {}
          }
        },
        include: {
          wallet: true,
          portfolio: true
        }
      });
      const token = jwt.sign(
        { userId: newUser.id },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
      );

      return { user: newUser, token };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new Error('DUPLICATE_EMAIL');
      }
      throw error;
    }
  }

  static async login(data: any) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        wallet: true,
        portfolio: true
      }
    });

    if (!user) {
      throw new Error('INVALID_CREDENTIALS');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('INVALID_CREDENTIALS');
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    );

    return { user, token };
  }
}