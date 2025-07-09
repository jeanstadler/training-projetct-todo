import mysql, { type Pool } from "mysql2/promise";

const pool: Pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

class SecurityRepository {

    // register
    public async registerUser(user: { email: string, password: string }): Promise<any> {
        try {
            console.log("registerUser, dans le repository");
            const [result] = await pool.execute(
                "INSERT INTO users (email, password) VALUES (?, ?)",
                [user.email, user.password]
            );
            console.log("result", result);
            return result;

        // le catch veut dire que l'on a une erreur
        } catch (error) {
            console.log("dans le catch du repository");

            if (error instanceof Error && error.message.includes("ER_DUP_ENTRY")) {
                throw new Error("Email already exists");
            } else {
                throw new Error(`Failed to register user: ${error}`);
            }
        }
    }


    // // login
    // public async login(req: Request, res: Response) {
    //     const { email, password } = req.body as { email: string, password: string };
    //     const user = await this.getUserByEmail(req, res);
    //     if (!user) {
    //         return null;
    //     }
    //     // voir si le mot de passe est correct
    //     const isPasswordCorrect = await this.isPasswordCorrect(password, user.password);
    //     if (!isPasswordCorrect) {
    //         return null;
    //     }
    //     return user;
    // }

    // // get user by email
    // public async getUserByEmail(req: Request, res: Response) {
    //     const { email } = req.body as { email: string };
    //     const [result] = await pool.execute(
    //         "SELECT * FROM users WHERE email = ?",
    //         [email]
    //     );
    //     return result;
    // }

    // public async isPasswordCorrect(req: Request, res: Response) {
    //     const { password } = req.body as { password: string };
    //     const user = await this.getUserByEmail(req, res);
    //     if (!user) {
    //         return null;
    //     }
    //     return password === user.password;
    // }
}

export default SecurityRepository;