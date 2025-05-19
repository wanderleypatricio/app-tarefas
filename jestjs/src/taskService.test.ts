// Importa o serviço de tarefas
import { TaskService } from "./taskService";

// Agrupa os testes da classe TaskService
describe("TaskService", () => {
  let taskService: TaskService;

  // Executado antes de cada teste para iniciar o serviço limpo
  beforeEach(() => {
    taskService = new TaskService();
  });

  // Testa se uma tarefa pode ser criada corretamente
  it("deve criar uma nova tarefa", () => {
    taskService.create("Estudar TypeScript");  // Cria tarefa
    expect(taskService.getAll()).toEqual([
      { id: 1, title: "Estudar TypeScript", completed: false } // Verifica conteúdo da tarefa
    ]);
  });

  // Testa se várias tarefas são listadas corretamente
  it("deve listar todas as tarefas", () => {
    taskService.create("Fazer compras");
    taskService.create("Academia");

    expect(taskService.getAll()).toHaveLength(2); // Verifica que há duas tarefas
  });

  // Testa se uma tarefa pode ser removida
  it("deve remover uma tarefa por ID", () => {
    taskService.create("Ler livro");
    taskService.remove(1); // Remove a tarefa com ID 1

    expect(taskService.getAll()).toEqual([]); // A lista deve estar vazia
  });

  // Testa se é possível concluir uma tarefa
  it("deve marcar uma tarefa como concluída", () => {
    taskService.create("Praticar Node.js");
    taskService.complete(1); // Marca tarefa como concluída

    expect(taskService.getAll()).toEqual([
      { id: 1, title: "Praticar Node.js", completed: true } // Deve estar concluída
    ]);
  });

  // Testa se erro é lançado ao tentar remover tarefa inexistente
  it("deve lançar erro ao remover tarefa inexistente", () => {
    expect(() => taskService.remove(999)).toThrow("Tarefa não encontrada");
  });

  // Testa se erro é lançado ao tentar concluir tarefa inexistente
  it("deve lançar erro ao completar tarefa inexistente", () => {
    expect(() => taskService.complete(999)).toThrow("Tarefa não encontrada");
  });
});
