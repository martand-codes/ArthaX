import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message:"Server is Healthy"
    });
});

export default app;