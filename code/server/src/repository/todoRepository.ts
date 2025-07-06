import mysql, { type Pool } from "mysql2/promise";

// pour utiliser le (req:Request, res:Response) dans la fonction getAllTodo il faut l'importer
import { type Request, type Response } from "express";


class TodoRepository {

    // les information que la base de données à besoin pour faire la connexion
    private pool: Pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    });


    // promise === à une promesse de résultat future c'est à dire pas pour l'instant
    public async getAllTodo(req: Request, res: Response): Promise<void> {
        try {
            console.log("getAllTodo, dans le repository (requette sql)");
            // le [result] est une destructuration de tableau c'est à dire prendre le premier élément du tableau
            // const [result] = await this.pool.execute("SELECT todo.* FROM my_db.todo;");

            const query = "SELECT todo.* FROM my_db.todo;";

            // await peut etre utilisé uniquement dans une fonction async
            // await est utilisé pour attendre de manière propre et lisible pour une opération asynchrone (promise)
            // this fait référence l'instance actuelle de la classe TodoRepository (l'objet sur lequel on travaille en ce moment)
            // pool c'est la connexion à la base de données
            // query c'est la requette sql
            // this c'est qu'il récupère le "pool" qui est dans la classe todorepositoriu 
            // this est utilisé pour accéder à quelque chose qui existe déjà sur l'instance. (pour créer c'est "new")
            const [result] = await this.pool.query(query);

            console.log(result);
            res.status(200).send(result);
        } catch (error) {
            res.status(400).send("Failed to get todo");
        }
    }

    public async getIdTodo(req: Request, res: Response): Promise<any> {
        try {
            console.log("getIdTodo, dans le repository (requette sql)");
            
            // le ? est un placeholder pour éviter les injections SQL
            // le ? sera remplacé par la valeur de req.params.id
            const query = "SELECT todo.* FROM my_db.todo WHERE id = ?;";
            const [result] = await this.pool.execute(query, [req.params.id]);
            // req.params.id est utilisé pour récupérer l'id dans l'url
            // dans l'autre méthode getalltodo il n'y a pas besoin de récupérer l'id car on prend tout les éléments de la table

            return result;
        } catch (error) {
            throw new Error("Failed to get todo");
        }
    }
}

export default TodoRepository;