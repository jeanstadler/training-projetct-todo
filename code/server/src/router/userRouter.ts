import express, { type Router, type Request, type Response, type NextFunction } from "express";
import UserController from "../controller/userController";

class UserRouter {
    private router: Router = express.Router();
    private userController: UserController = new UserController();

    public getAllUser = (): Router => {
        this.router.get("/all", async (req: Request, res: Response, next: NextFunction) => {
            try {
                console.log("getAllUser, dans le router");
                await this.userController.getAllUser(req, res);
            } catch (error) {
                next(error);
            }
        });
        return this.router;
    }
}

export default UserRouter;