import express, { Request, Response } from 'express'
import cors from 'cors';
import authRoute from "./routes/authRoute";
import walletRoutes from './routes/walletRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message:"Server is Healthy"
    });
});
app.use('/api/auth', authRoute);
app.use('/api/wallet', walletRoutes);

export default app;