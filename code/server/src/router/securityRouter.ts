import express, { type Router, type Request, type Response, type NextFunction } from "express";
import SecurityCheckJoi from "../middleware/securityCheckJoi";
import RegisterController from "../controller/registerController";

class SecurityRouter {
    private router: Router = express.Router();


    // ici on spécifie le middleware qui va vérifier les données entrantes
    private securityCheckJoi: SecurityCheckJoi = new SecurityCheckJoi();

    private registerController: RegisterController = new RegisterController();

    public getRouter = (): Router => {
        // on utilise le router pour les routes
        // c'est à dire que toutes les routes sont définies dans le router
        this.router.use(this.router);


		this.router.post("/register", 
			this.securityCheckJoi.checkRegister,
			async (req: Request, res: Response, next: NextFunction) => {
				try {
					await this.registerController.register(req, res);

				} catch (error) {
					next(error);
				}
			}
		);
        return this.router;

    }


};

export default SecurityRouter;