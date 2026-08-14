import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
  var prisma: PrismaClient | undefined;
}

const getPrismaClient = () => {

  const connectionString = process.env.DATABASE_URL as string;
  const pool = new Pool({ connectionString });

  const adapter = new PrismaPg(pool);
  
  return new PrismaClient({ adapter });
};

const prisma = global.prisma || getPrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;