import { Request, Response } from "express";
import SecurityRepository from "../repository/securityRepository";

class RegisterController {
    public async register(req: Request, res: Response): Promise<void> {
        try {
            const registerRepository = await new SecurityRepository().registerUser(req.body);
            res.status(200).send("Register success");
        } catch (error) {
            res.status(400).send("Register failed");
        }

    }
}

export default RegisterController;