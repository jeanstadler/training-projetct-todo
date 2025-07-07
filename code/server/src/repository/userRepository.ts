import mysql, { type Pool } from "mysql2/promise";

// pour utiliser le (req:Request, res:Response) dans la fonction getAllTodo il faut l'importer
import { type Request, type Response } from "express";

class UserRepository {

    private pool: Pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    });

    public getAllUser = async (req: Request, res: Response): Promise<any> => {
        try {
            const query = "SELECT users.* FROM my_db.users;";
            const [rows] = await this.pool.query(query);
            return rows;
        } catch (error) {
            console.log("error dans le repository");
            res.status(500).send("error dans le repository");
        }
    }       
}

export default UserRepository;
