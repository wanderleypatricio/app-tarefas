import { Router } from 'express';
import {
  createTask,
  getAllTasks,
  deleteTask,
  updateTaskStatus
} from '../controllers/taskController';

const router = Router();

// Rota para criar nova tarefa
router.post('/', createTask);

// Rota para listar todas as tarefas
router.get('/', getAllTasks);

// Rota para deletar uma tarefa por ID
router.delete('/:id', deleteTask);

// Rota para alternar o status de uma tarefa (feito/não feito)
router.patch('/:id/status', updateTaskStatus);

export default router;
