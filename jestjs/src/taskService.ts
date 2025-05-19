// Define o formato de uma tarefa
export interface Task {
    id: number;           // Identificador único da tarefa
    title: string;        // Título ou descrição da tarefa
    completed: boolean;   // Status da tarefa: concluída ou não
  }
  
  // Serviço responsável por gerenciar tarefas
  export class TaskService {
    private tasks: Task[] = [];    // Lista interna de tarefas
    private nextId = 1;            // Contador para gerar IDs únicos
  
    // Cria uma nova tarefa com título fornecido
    create(title: string): void {
      const newTask: Task = {
        id: this.nextId++,         // ID único autoincrementado
        title,                     // Define o título passado
        completed: false           // Tarefa inicia como não concluída
      };
      this.tasks.push(newTask);    // Adiciona a tarefa à lista
    }
  
    // Retorna todas as tarefas cadastradas
    getAll(): Task[] {
      return this.tasks;
    }
  
    // Remove uma tarefa pelo ID
    remove(id: number): void {
      const index = this.tasks.findIndex(task => task.id === id); // Procura o índice da tarefa
      if (index === -1) throw new Error("Tarefa não encontrada");  // Erro se não existir
      this.tasks.splice(index, 1);                                 // Remove a tarefa da lista
    }
  
    // Marca uma tarefa como concluída
    complete(id: number): void {
      const task = this.tasks.find(task => task.id === id);        // Procura a tarefa pelo ID
      if (!task) throw new Error("Tarefa não encontrada");          // Erro se não existir
      task.completed = true;                                       // Marca como concluída
    }
  }
  