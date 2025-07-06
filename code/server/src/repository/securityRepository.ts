import User from "../model/User";
import mysql, { type Pool, type RowDataPacket, type ResultSetHeader } from "mysql2/promise";

const pool: Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

class SecurityRepository {
    public async registerUser(user: User): Promise<void> {
        try {
            const [result] = await pool.execute(
                "INSERT INTO users (email, password, name) VALUES (?, ?, ?)",
                [user.email, user.password, user.name]
            );
        } catch (error) {
            throw new Error("Failed to register user");
        }
    }
}

export default SecurityRepository;