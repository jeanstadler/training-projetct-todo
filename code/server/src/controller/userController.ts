import { Request, Response } from "express";
import UserRepository from "../repository/userRepository";

class UserController {
    public getAllUser = async (req: Request, res: Response) => {
        try {
            console.log("getAllUser, dans le controller");
            const userRepository = new UserRepository();
            const result = await userRepository.getAllUser(req, res);
            res.status(200).send(result);
        } catch (error) {
            console.log("error dans le controller");
            res.status(500).send("error dans le controller");
        }
    }
}

export default UserController;
