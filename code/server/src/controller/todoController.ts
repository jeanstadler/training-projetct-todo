import { type Request, type Response } from "express";
import TodoRepository from "../repository/todoRepository";

class TodoController {

    // new TodoRepository() est une instance de la classe TodoRepository
    // instance c'est un objet qui est créé à partir d'une classe (qui a des données dedans)
    // todorepository est une instance de la classe TodoRepository
    private todoRepository: TodoRepository = new TodoRepository();

    public async getAllTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoRepository = await this.todoRepository.getAllTodo(req, res);
            res.status(200).send(todoRepository);
        } catch (error) {
            res.status(400).send("Failed to get todo");
        }
    }

    public async getIdTodo(req: Request, res: Response): Promise<void> {
        try {
            const todoRepository = await this.todoRepository.getIdTodo(req, res);
            res.status(200).send(todoRepository);
        } catch (error) {
            res.status(400).send("Failed to get todo");
        }
    }
}

export default TodoController;