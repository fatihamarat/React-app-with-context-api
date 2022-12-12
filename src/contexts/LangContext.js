import { createContext, useContext, useState} from "react";

const LangContext = createContext();

export const LangContextProvider = ({children})=>{
    const [lang,setLang] = useState("TR");
    const langs = {
        lang,
        setLang
    }
    return(
        <LangContext.Provider value={langs}>{children}</LangContext.Provider>
    )
};

export const useLang = ()=>{
    const context = useContext(LangContext);
    if(context === undefined){
        throw new Error("LangContext must be used within a LangProvider");
        
    };

    return context;
};