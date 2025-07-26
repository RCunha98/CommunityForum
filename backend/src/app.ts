import express from 'express';
import cors from 'cors'; 

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Backend! API is running.');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Backend is healthy!' });
});

export default app;