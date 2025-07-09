import { NextFunction, Request, Response } from "express";
import SecurityRepository from "../repository/securityRepository";
import argon2 from "argon2";


class SecurityController {

    private securityRepository: SecurityRepository = new SecurityRepository();

    public async register(req: Request, res: Response): Promise<any> {

        // 1er: hasher le mot de passe
        const hashedPassword = await argon2.hash(req.body.password);
        const user = {
            email: req.body.email,
            password: hashedPassword
        }
        try {
            const registerRepository = await this.securityRepository.registerUser(user);
            console.log("registerRepository", registerRepository);
            return res.status(200).send("Register success");
        } catch (error) {
            console.log("dans le catch du controller");
            console.log("error", error);

            if (error instanceof Error) {
                if (error.message === "Email already exists") {
                    return res.status(400).send("Email already exists");
                } else {
                    return res.status(400).send("Register failed");
                }
            }
        }
        return res.status(400).send("Register failed");
    }


    // public async login(req: Request, res: Response, next: NextFunction) {
    //     // 1er: voir si l'utilisateur existe
    //     const user = await this.securityRepository.getUserByEmail(req, res);
    //     if (!user) {
    //         return res.status(401).json({ message: "Invalid credentials" });
    //     }

    //     // 2eme: voir si le mot de passe est correct
    //     const isPasswordCorrect = await this.securityRepository.isPasswordCorrect(req, res);
    //     if (!isPasswordCorrect) {
    //         return res.status(401).json({ message: "Invalid credentials" });
    //     }


    //     try {
    //         await new SecurityRepository().login(req, res);
    //         res.status(200).json({ message: "Login successful" });
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}


export default SecurityController;
