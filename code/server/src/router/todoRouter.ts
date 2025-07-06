import express, { type Router, type Request, type Response, type NextFunction } from "express";
import TodoController from "../controller/todoController";

class TodoRouter {
    // toujours créer un router et le spécifier en tant que express.Router()
    private router: Router = express.Router();

    private todoController: TodoController = new TodoController();

    public getRouter = (): Router => {

        this.router.get("/all", async (req: Request, res: Response, next: NextFunction) => {
            try {
                console.log("getAllTodo, dans le router");
                await this.todoController.getAllTodo(req, res);

            } catch (error) {
                next(error);
            }
        });

    return this.router;

    }
}

export default TodoRouter;