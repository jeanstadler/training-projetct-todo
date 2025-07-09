import express, { type Router, type Request, type Response, type NextFunction } from "express";
import SecurityCheckJoi from "../middleware/securityCheckJoi";
import SecurityController from "../controller/securityController";


class SecurityRouter {
    private router: Router = express.Router();


    // ici on spécifie le middleware qui va vérifier les données entrantes
    private securityCheckJoi: SecurityCheckJoi = new SecurityCheckJoi();

    private securityController: SecurityController = new SecurityController();
    
    
    public getRouter = (): Router => {
        // on utilise le router pour les routes
        // c'est à dire que toutes les routes sont définies dans le router
        // this.router.use(this.router);


		this.router.post("/register", 
			this.securityCheckJoi.checkRegister,    
			async (req: Request, res: Response, next: NextFunction) => {
				try {

					await this.securityController.register(req, res);

				} catch (error) {
                    console.log("dans le catch du router");
					next(error);
				}
			}
		);
        
        // this.router.post("/login", 
        //     async (req: Request, res: Response, next: NextFunction) => {
        //         try {
        //             await this.securityController.login(req, res, next);
        //         } catch (error) {
        //             next(error);
        //         }
        //     }
        // );

        return this.router;

    }


};

export default SecurityRouter;