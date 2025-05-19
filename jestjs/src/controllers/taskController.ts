import { Request, Response } from 'express';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

let tasks: Task[] = [];
let currentId = 1;

// Criar nova tarefa
export const createTask = (req: Request, res: Response): Response => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Título obrigatório' });
  }

  const newTask: Task = {
    id: currentId++,
    title,
    done: false,
  };

  tasks.push(newTask);
  return res.status(201).json(newTask);
};

// Listar todas as tarefas
export const getAllTasks = (_req: Request, res: Response): Response => {
  return res.json(tasks);
};

// Deletar uma tarefa por ID
export const deleteTask = (req: Request, res: Response): Response => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  return res.status(204).send();
};

// Alternar status da tarefa
export const updateTaskStatus = (req: Request, res: Response): Response => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' });
  }

  task.done = !task.done; // Alterna entre feito e não feito
  return res.json(task);
};
