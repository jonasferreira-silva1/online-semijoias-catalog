import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares de segurança
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // máximo 100 requests por IP
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rotas da API (serão implementadas)
app.get('/api/products', async (req, res) => {
  // TODO: Implementar busca de produtos
  res.json({ message: 'API de produtos - em desenvolvimento', products: [] });
});

app.get('/api/products/:id', async (req, res) => {
  // TODO: Implementar busca de produto por ID
  res.json({ message: 'API de produto por ID - em desenvolvimento' });
});

app.post('/api/products', async (req, res) => {
  // TODO: Implementar criação de produto (admin)
  res.json({ message: 'API de criação de produto - em desenvolvimento' });
});

app.put('/api/products/:id', async (req, res) => {
  // TODO: Implementar atualização de produto (admin)
  res.json({ message: 'API de atualização de produto - em desenvolvimento' });
});

app.delete('/api/products/:id', async (req, res) => {
  // TODO: Implementar exclusão de produto (admin)
  res.json({ message: 'API de exclusão de produto - em desenvolvimento' });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
  console.log(`📡 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

