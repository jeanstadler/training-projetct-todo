import { createContext, useContext, useState } from "react";



const NoticeContext = createContext<{ notice: string, setNotice: (notice: string) => void }>({ notice: "", setNotice: () => {} });
/*
    - on crée un contexte pour le notice
    - "<{ notice: string, setNotice: (notice: string) => void }>" définit la structure du contexte
    - on crée un provider pour le notice
    - on crée un hook pour utiliser le contexte
*/

    // on crée un provider pour le notice
export const NoticeProvider = ({ children }: { children: React.ReactNode }) => {
    const [notice, setNotice] = useState("");
    return <NoticeContext.Provider value={{ notice, setNotice }}>{children}</NoticeContext.Provider>;
};
// le "NoticeProvider" c'est le composant qui est appelé dans le "index.tsx"

export const useNotice = () => {
    return useContext(NoticeContext);
};