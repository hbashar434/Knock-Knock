import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello, World! This is your Express server running with TypeScript.'
  );
});

// Start the server
app.listen(PORT, (): void => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
