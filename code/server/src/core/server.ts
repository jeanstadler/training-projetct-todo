
import express, { type Router, type Express, type Request, type Response } from
"express";
import http from "http";
// import cors from "cors";
import SecurityRouter from "../router/securityRouter";
import TodoRouter from "../router/todoRouter";
import UserRouter from "../router/userRouter";

import cors from "cors";

class Server {
    // on spécifie le type de l'application (express)
    private app: Express = express();

    // on spécifie le type de router (express.Router)
    private router: Router = express.Router();


    constructor() {
        // on utilise express.json() pour parser le corps des requêtes en JSON
        // quand on recois des données du client on ne peut pas les lire (exemple : maChaine.username) donc on doit les "parser" (on transforme la chaine de caractères en objet) pour pouvoir les lire
        this.app.use(express.json());
        
        // ici on spécifie le cors pour autoriser le client à accéder aux ressources du serveur
        this.app.use(cors({
            // process.env.ORIGINES est une variable d'environnement qui contient les origines autorisées
            origin: process.env.ORIGINS?.split(","),
            // credentials: true permet d'envoyer au client des cookies dans le headers d'authentification
            credentials: true,
        }));

        // on utilise le router pour les routes
        // c'est à dire que toutes les routes sont définies dans le router
        this.app.use(this.router);

        this.getRouterListe();
    }

    // on spécifie les routes qui seront utilisées dans le serveur
    private getRouterListe = (): void => {
        this.router.use("/api/health", (req: Request, res: Response) => {
            res.status(200).send("Server is running");
        });
		this.router.use("/api/security", new SecurityRouter().getRouter());
        this.router.use("/api/todo", new TodoRouter().getRouter());
        this.router.use("/api/users", new UserRouter().getAllUser());


    }
    // permet de créer le serveur
    public createServer = (): http.Server => {
        return http.createServer(this.app);
        };

}

export default Server;