import express, { Request, Response } from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Prefixo para as rotas de tarefas
app.use('/tasks', taskRoutes);

// Rota raiz para verificar se o servidor está online
app.get('/', (_req: Request, res: Response) => {
  res.send('🎯 API de Tarefas está no ar!');
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
