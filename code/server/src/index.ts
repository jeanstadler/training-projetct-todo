import Server from "./core/server";
// on créer la variable server qui contient le serveur
const server = new Server().createServer();

// on démarre le serveur sur le port spécifié dans le fichier .env
// le "|| 3000" spécifie le port par défaut si le port n'est pas spécifié dans le fichier .env
server.listen(process.env.PORT || 3000, () => {
    // console.log(`Server is running on port ${process.env.PORT || 3000}`);
});