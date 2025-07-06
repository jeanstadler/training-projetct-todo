import { Request, Response, NextFunction } from "express";
import Joi, { type ValidationError } from "joi";
import User from "../model/User";


class SecurityValidator {
    // c'est une fonction asynchrone qui va valider les données entrantes
    // elle va renvoyer un objet User
    // on utilise le "Promise" pour indiquer que la fonction est asynchrone
    // on utilise le "User" pour indiquer le type de l'objet qui sera renvoyé
    // on utilise le "Request" pour indiquer le type de la requête
    // on utilise le "Response" pour indiquer le type de la réponse
    // on utilise le "NextFunction" pour indiquer le type de la fonction suivante
    public async validateRegister(req: Request, res: Response, next: NextFunction): Promise<User> {
        const schema = Joi.object({
            // le ".email()" permet de vérifier si l'email est valide c'est à dire qu'il contient un "@" et un "."
            email: Joi.string().email().required(),
            // le ".required()" permet de vérifier si le mot de passe est requis
            password: Joi.string().required().min(8).max(32),
            // le ".required()" permet de vérifier si le nom est requis
            name: Joi.string().required(),
        });
        const { error, value } = schema.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        return value;
    }
}

export default SecurityValidator;