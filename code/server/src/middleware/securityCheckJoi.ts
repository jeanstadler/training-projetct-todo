import { Request, Response, NextFunction } from "express";
import validateRegister from "../validator/securityValidator";


class SecurityCheckJoi {

    private validateRegisterJoi:validateRegister = new validateRegister();

    public checkRegister = async (req: Request, res: Response, next: NextFunction) => {
        try {
            // le "await" permet de "attendre" la fin de la validation
            // c'est à dire que le code ne continue pas tant que la validation n'est pas terminée
            // mais pour pouvoir l'utiliser faut spécifier le type de la fonction "async"
            await this.validateRegisterJoi.validateRegister(req, res, next);
            // on utilise "next()" pour passer à la fonction suivante car c'est un middleware et pas une fonction classique qui retourne une valeur
            next();
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    }
}

export default SecurityCheckJoi;